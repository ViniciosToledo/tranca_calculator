-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "timeUm" TEXT NOT NULL,
    "timeDois" TEXT NOT NULL,
    "pontosTimeUm" INTEGER NOT NULL,
    "pontosTimeDois" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
