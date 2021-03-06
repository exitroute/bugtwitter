import { NotFoundError } from "blitz"
import db from "db"

export default async function getIssue(id: number) {
  const issue = await db.issue.findUnique({
    where: { id: id },
    include: {
      createdBy: {
        select: {
          name: true,
        },
      },
      updatedBy: {
        select: {
          name: true,
        },
      },
      assignedTo: {
        select: {
          id: true,
          name: true,
        },
      },
      assignedToProject: {
        select: {
          id: true,
          title: true,
          assignedTeam: true,
        },
      },
      files: true,
    },
  })
  if (!issue) {
    throw new NotFoundError()
  }
  return issue
}
