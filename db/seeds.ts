import db from "./index"
var faker = require("faker")

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * or https://github.com/Marak/Faker.js to easily generate
 * realistic data.
 */

const seed = async () => {
  await db.team.deleteMany()
  await db.project.deleteMany()
  await db.issue.deleteMany()
  await db.user.deleteMany()

  await db.user.create({
    data: {
      name: "Ryan Admin",
      email: "dalryan.os@gmail.com",
      hashedPassword: process.env.SEEDED_USER_HASH,
      role: "ADMIN",
      createdIssues: {
        create: [
          {
            title: `${faker.hacker.noun()} does't work`,
            description: faker.hacker.phrase(),
          },
        ],
      },
      createdProjects: {
        create: [
          {
            title: `Project ${faker.hacker.noun()}`,
            description: faker.hacker.phrase(),
          },
          {
            title: `Project ${faker.hacker.noun()}`,
            description: faker.hacker.phrase(),
          },
        ],
      },
      createdTeams: {
        create: [
          {
            title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
            description: faker.hacker.phrase(),
          },
          {
            title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
            description: faker.hacker.phrase(),
          },
        ],
      },
    },
  })

  await db.user.create({
    data: {
      name: "James User",
      email: "ryanoshea@t-mobile.de",
      hashedPassword: process.env.SEEDED_USER_HASH,
      role: "USER",
      createdIssues: {
        create: [
          {
            title: `${faker.hacker.noun()} does't work`,
            description: faker.hacker.phrase(),
          },
        ],
      },
    },
  })

  for (let i = 0; i < 5; i++) {
    let name: string = faker.name.firstName()
    let email: string = faker.internet.exampleEmail(`${name}`)
    await db.user.create({
      data: {
        name: name,
        email: email,
        hashedPassword: process.env.SEEDED_USER_HASH,
        role: "USER",
        createdIssues: {
          create: [
            {
              title: `${faker.hacker.noun()} does't work`,
              description: faker.hacker.phrase(),
              priority: "NORMAL",
              status: "NEW",
              files: {
                create: [
                  {
                    url: faker.random.image(),
                  },
                  {
                    url: faker.random.image(),
                  },
                ],
              },
            },
            {
              title: `${faker.hacker.noun()} does't work`,
              description: faker.hacker.phrase(),
              priority: "LOW",
              status: "NEW",
            },
            {
              title: `${faker.hacker.noun()} does't work`,
              description: faker.hacker.phrase(),
              priority: "NORMAL",
              status: "NEW",
            },
            {
              title: `${faker.hacker.noun()} does't work`,
              description: faker.hacker.phrase(),
              priority: "NORMAL",
              status: "NEW",
            },
            {
              title: `${faker.hacker.noun()} does't work`,
              description: faker.hacker.phrase(),
              priority: "NORMAL",
              status: "NEW",
            },
          ],
        },
      },
    })
  }
}

export default seed
