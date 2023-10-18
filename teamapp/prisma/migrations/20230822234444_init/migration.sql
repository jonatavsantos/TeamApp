-- CreateTable
CREATE TABLE "User" (
    "codUser" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Team" (
    "codTeam" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nameTeam" TEXT NOT NULL,
    "countryTeam" TEXT NOT NULL,
    "cityTeam" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "mister" INTEGER NOT NULL,
    "player" INTEGER NOT NULL,
    CONSTRAINT "Team_mister_fkey" FOREIGN KEY ("mister") REFERENCES "User" ("codUser") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Team_player_fkey" FOREIGN KEY ("player") REFERENCES "Player" ("cpf") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Player" (
    "cpf" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "namePlayer" TEXT NOT NULL,
    "years" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "countryPlayer" TEXT NOT NULL,
    "cityPlayer" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_cpf_key" ON "Player"("cpf");
