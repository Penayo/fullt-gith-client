import React, { useState, useEffect } from 'react';
import { Alert, Table, Spinner, Card, Pagination, Button } from 'flowbite-react';
import { HiInformationCircle, HiRefresh } from 'react-icons/hi'
import { useParams } from "react-router-dom";
import { useGetCommits } from '../services/github-api';
import { Commit } from '../models/Commit' ;
import dayjs from 'dayjs';

interface CommitProps {
  repository: string
}

function Commits ({ repository }:CommitProps) {
  const { branchName } = useParams<{ branchName: string}>() ;
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [key, setKey] = useState(0);
  const [loading, data, error] = useGetCommits(key, repository, branchName, page, perPage);

  useEffect(() => {
    setPage(1)
  }, [branchName])

  function onPageChange (currentPage: number) {
    setPage(currentPage)
  }

  function TableItems () {
    return (
      <Table.Body className="divide-y">
        {
          (data as Commit[]).map((commit: Commit) => (
            <Table.Row key={commit.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                { commit.author }
              </Table.Cell>
              <Table.Cell>
                { commit.message }
              </Table.Cell>
              <Table.Cell>
                { dayjs(commit.date).format('YYYY-MM-DD HH:mm') }
              </Table.Cell>
            </Table.Row>
          ))
        }
      </Table.Body>
    )
  }

  function LoadingItem () {
    return (
      <Card className="w-full text-center">
        <Spinner aria-label="Default status" />
      </Card>
    )
  }

  return (
    <>
      <div className="w-full dark:text-white">
        <div className="flex">
          <div className="grow w-full h-14 ...">
            <h5 className="mb-4 text-2xl font-bold">Branch {branchName}'s Commit List</h5>
          </div>
          <div className="flex-none w-18 h-40">
            <Button size="sm" onClick={() => setKey(key + 1)}>
              <HiRefresh className="mr-2 h-5 w-5" />
              Refresh
            </Button>
          </div>
        </div>

        { loading && <LoadingItem /> }
        { page > 1 && (data as Commit[]).length === 0 &&
          <Alert color="failure" icon={HiInformationCircle}>
            <span>
              <span className="font-medium">
                Info!
              </span>
              {' '}There is no more data to show.
            </span>
          </Alert>
        }
        { !loading && (data as Commit[]).length > 0 &&
          <div className="mt-4">
            <Table hoverable={true}>
              <Table.Head>
                <Table.HeadCell>
                  Author
                </Table.HeadCell>
                <Table.HeadCell>
                  Message
                </Table.HeadCell>
                <Table.HeadCell>
                  Date
                </Table.HeadCell>
              </Table.Head>
              <TableItems />
            </Table>
          </div>
        }
        <div  className="flex items-center justify-center text-center">
          <Pagination
            currentPage={page}
            layout="navigation"
            onPageChange={onPageChange}
            showIcons={true}
            totalPages={100}
          />
        </div>
      </div>
    </>
  )
}

export default Commits
