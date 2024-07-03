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
    "mister" INTEGER NOT NULL,
    "nameTeam" TEXT NOT NULL,
    "countryTeam" TEXT NOT NULL,
    "cityTeam" TEXT NOT NULL,
    "modality" TEXT NOT NULL,
    CONSTRAINT "Team_mister_fkey" FOREIGN KEY ("mister") REFERENCES "User" ("codUser") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Player" (
    "cpf" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "namePlayer" TEXT NOT NULL,
    "years" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "countryPlayer" TEXT NOT NULL,
    "cityPlayer" TEXT NOT NULL,
    "codTeam" INTEGER NOT NULL,
    CONSTRAINT "Player_codTeam_fkey" FOREIGN KEY ("codTeam") REFERENCES "Team" ("codTeam") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Team_modality_key" ON "Team"("modality");

-- CreateIndex
CREATE UNIQUE INDEX "Player_cpf_key" ON "Player"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "Player_namePlayer_key" ON "Player"("namePlayer");
