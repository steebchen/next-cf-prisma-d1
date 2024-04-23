import { PrismaClient } from '@prisma/client'
import { PrismaD1 } from '@prisma/adapter-d1'
import { getRequestContext } from '@cloudflare/next-on-pages'

export async function get() {
  return {
    kv: await getKV(),
    db: await getDB(),
  }
}

export async function getKV() {
  return getRequestContext().env.kv
}

export async function getDB() {
  const adapter = new PrismaD1(getRequestContext().env.db)
  return new PrismaClient({ adapter })
}
