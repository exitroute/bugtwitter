/**
 *  This is where users that have signed up and are logged in
 *  can see tickets
 * */

import { Suspense } from "react"
import { Link, BlitzPage, Routes, useQuery } from "blitz"
import { Box, UnorderedList, ListItem } from "@chakra-ui/react"
import Layout from "app/core/layouts/Layout"
import { ItemCard } from "app/core/components/ItemCard"
import getIssues from "app/issues/queries/getIssues"

const getIssueStatus = (issue) => {
  if (issue.assignedToId === null) {
    return "OPEN"
  } else if (issue.assignedToId) {
    return "ASSIGNED"
  } else {
    return "OPEN"
  }
  // Add closed
  // Add in progress
  // Add blocked
}

const IssueList = () => {
  const [issues] = useQuery(getIssues, undefined)
  return (
    <Box>
      <UnorderedList styleType="none">
        {issues?.map((issue) => {
          const status = getIssueStatus(issue)
          return (
            <ListItem key={issue.id}>
              <Link href={Routes.IssuePage({ issueId: issue.id })}>
                <a>
                  <ItemCard
                    id={issue.id}
                    title={issue.title}
                    description={issue.description}
                    status={status}
                  />
                </a>
              </Link>
            </ListItem>
          )
        })}
      </UnorderedList>
    </Box>
  )
}

const Issues: BlitzPage = () => {
  return (
    <main>
      <Suspense fallback="Loading issues...">
        <IssueList />
      </Suspense>
    </main>
  )
}

Issues.authenticate = { redirectTo: "/" }
Issues.suppressFirstRenderFlicker = true
Issues.getLayout = (page) => <Layout title="Issues">{page}</Layout>

export default Issues
