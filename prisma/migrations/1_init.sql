-- CreateTable
CREATE TABLE "poll" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "views" INTEGER NOT NULL DEFAULT 1,
    "title" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "row" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "votes" INTEGER NOT NULL DEFAULT 0,
    "poll_id" TEXT NOT NULL,
    CONSTRAINT "row_poll_id_fkey" FOREIGN KEY ("poll_id") REFERENCES "poll" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
