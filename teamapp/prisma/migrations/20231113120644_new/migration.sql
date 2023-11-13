/*
  Warnings:

  - You are about to drop the column `logo` on the `Team` table. All the data in the column will be lost.
  - You are about to drop the column `player` on the `Team` table. All the data in the column will be lost.
  - Added the required column `codTeam` to the `Player` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modality` to the `Team` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Player" (
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
INSERT INTO "new_Player" ("cityPlayer", "countryPlayer", "cpf", "height", "namePlayer", "weight", "years") SELECT "cityPlayer", "countryPlayer", "cpf", "height", "namePlayer", "weight", "years" FROM "Player";
DROP TABLE "Player";
ALTER TABLE "new_Player" RENAME TO "Player";
CREATE UNIQUE INDEX "Player_cpf_key" ON "Player"("cpf");
CREATE UNIQUE INDEX "Player_namePlayer_key" ON "Player"("namePlayer");
CREATE TABLE "new_Team" (
    "codTeam" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mister" INTEGER NOT NULL,
    "nameTeam" TEXT NOT NULL,
    "countryTeam" TEXT NOT NULL,
    "cityTeam" TEXT NOT NULL,
    "modality" TEXT NOT NULL,
    CONSTRAINT "Team_mister_fkey" FOREIGN KEY ("mister") REFERENCES "User" ("codUser") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Team" ("cityTeam", "codTeam", "countryTeam", "mister", "nameTeam") SELECT "cityTeam", "codTeam", "countryTeam", "mister", "nameTeam" FROM "Team";
DROP TABLE "Team";
ALTER TABLE "new_Team" RENAME TO "Team";
CREATE UNIQUE INDEX "Team_modality_key" ON "Team"("modality");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
