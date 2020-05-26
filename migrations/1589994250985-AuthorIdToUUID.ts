import {MigrationInterface, QueryRunner} from "typeorm";

export class AuthorIdToUUID1589994250985 implements MigrationInterface {
    name = 'AuthorIdToUUID1589994250985'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "book_authors_author" DROP CONSTRAINT "FK_a4cafdf2ec9974524a5321c7516"`, undefined);
        await queryRunner.query(`ALTER TABLE "author" DROP CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871"`, undefined);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "author" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`, undefined);
        await queryRunner.query(`ALTER TABLE "author" ADD CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "book_authors_author" DROP CONSTRAINT "PK_963de00068693ab6e5767de614b"`, undefined);
        await queryRunner.query(`ALTER TABLE "book_authors_author" ADD CONSTRAINT "PK_9bf58ffb2a12a8609a738ee8cae" PRIMARY KEY ("bookId")`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_a4cafdf2ec9974524a5321c751"`, undefined);
        await queryRunner.query(`ALTER TABLE "book_authors_author" DROP COLUMN "authorId"`, undefined);
        await queryRunner.query(`ALTER TABLE "book_authors_author" ADD "authorId" uuid NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "book_authors_author" DROP CONSTRAINT "PK_9bf58ffb2a12a8609a738ee8cae"`, undefined);
        await queryRunner.query(`ALTER TABLE "book_authors_author" ADD CONSTRAINT "PK_963de00068693ab6e5767de614b" PRIMARY KEY ("bookId", "authorId")`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_a4cafdf2ec9974524a5321c751" ON "book_authors_author" ("authorId") `, undefined);
        await queryRunner.query(`ALTER TABLE "book_authors_author" ADD CONSTRAINT "FK_a4cafdf2ec9974524a5321c7516" FOREIGN KEY ("authorId") REFERENCES "author"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "book_authors_author" DROP CONSTRAINT "FK_a4cafdf2ec9974524a5321c7516"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_a4cafdf2ec9974524a5321c751"`, undefined);
        await queryRunner.query(`ALTER TABLE "book_authors_author" DROP CONSTRAINT "PK_963de00068693ab6e5767de614b"`, undefined);
        await queryRunner.query(`ALTER TABLE "book_authors_author" ADD CONSTRAINT "PK_9bf58ffb2a12a8609a738ee8cae" PRIMARY KEY ("bookId")`, undefined);
        await queryRunner.query(`ALTER TABLE "book_authors_author" DROP COLUMN "authorId"`, undefined);
        await queryRunner.query(`ALTER TABLE "book_authors_author" ADD "authorId" integer NOT NULL`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_a4cafdf2ec9974524a5321c751" ON "book_authors_author" ("authorId") `, undefined);
        await queryRunner.query(`ALTER TABLE "book_authors_author" DROP CONSTRAINT "PK_9bf58ffb2a12a8609a738ee8cae"`, undefined);
        await queryRunner.query(`ALTER TABLE "book_authors_author" ADD CONSTRAINT "PK_963de00068693ab6e5767de614b" PRIMARY KEY ("bookId", "authorId")`, undefined);
        await queryRunner.query(`ALTER TABLE "author" DROP CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871"`, undefined);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "author" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "author" ADD CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "book_authors_author" ADD CONSTRAINT "FK_a4cafdf2ec9974524a5321c7516" FOREIGN KEY ("authorId") REFERENCES "author"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

}
