// // eslint-disable-next-line import/no-named-as-default
// import prisma from '../lib/prisma'
//
// async function main() {
//   await prisma.$connect()
//   await Promise.all([
//     prisma.poll.upsert({
//       where: { id: '1' },
//       update: {},
//       create: {
//         id: '1',
//         title: 'What is your favorite color?',
//         rows: {
//           create: [
//             {
//               title: 'Some first option',
//               votes: 7,
//             },
//             {
//               title: 'Another one',
//               votes: 4,
//             },
//             {
//               title: 'Now this is a little longer option to make sure it fits',
//               votes: 2,
//             },
//             {
//               title: 'Unpopular option',
//               votes: 0,
//             },
//           ],
//         },
//       },
//     }),
//     prisma.poll.upsert({
//       where: { id: '2' },
//       update: {},
//       create: {
//         id: '2',
//         title: 'Poll 2',
//         rows: {
//           create: [
//             {
//               title: 'Red',
//               votes: 7,
//             },
//             {
//               title: 'Blue',
//               votes: 4,
//             },
//             {
//               title: 'Green',
//               votes: 2,
//             },
//             {
//               title: 'None',
//               votes: 0,
//             },
//           ],
//         },
//       },
//     }),
//   ])
// }
//
// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     // eslint-disable-next-line no-console
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
