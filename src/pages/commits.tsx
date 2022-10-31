import React, { useState } from 'react';
import { Table, Spinner, Card, Pagination } from 'flowbite-react';
import { useParams } from "react-router-dom";
import { useGetCommits } from '../services/github-api';
import { Commit } from '../models/Commit' ;

function Commits () {
  const { branchName } = useParams<{ branchName: string}>() ;
  const [page, setPage] = useState(1);
  const [key, setKey] = useState(0);
  const [loading, data, error] = useGetCommits(key, branchName, page, 15);

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
                { commit.date }
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
      <div className="w-full  tracking-tight text-gray-900 dark:text-white">
        <h5 className="mb-4 text-2xl font-bold">Branch {branchName}'s Commit List</h5>
        { loading && <LoadingItem /> }
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
        }
      </div>
    </>
  )
}

export default Commits
