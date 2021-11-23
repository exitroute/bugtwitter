import { BlitzPage, useParam, useQuery } from "blitz"
import { Suspense } from "react"
import DetailsLayout from "app/core/layouts/DetailsLayout"
import getIssue from "app/issues/queries/getIssue"

const IssueDetails = () => {
  const issueId = useParam("issueId", "number")!
  const [issue] = useQuery(getIssue, issueId)

  return (
    <main>
      <h1>{issue?.title}</h1>
      <p>{issue?.description}</p>
      <p>
        Created by {issue?.createdBy.name} on {issue?.createdAt.toTimeString()}
      </p>
      {issue?.assignedTo && (
        <p>
          Assigned to {issue?.assignedTo.name}
          {/* TODO add assignedTo by and the assigned time */}
        </p>
      )}
    </main>
  )
}

const IssuePage: BlitzPage = () => {
  return (
    <Suspense fallback="Loading...">
      <IssueDetails />
    </Suspense>
  )
}

IssuePage.authenticate = true
IssuePage.suppressFirstRenderFlicker = true
IssuePage.getLayout = (page) => <DetailsLayout title="Issue">{page}</DetailsLayout>

export default IssuePage