import {MigrationInterface, QueryRunner} from "typeorm";

export class BookToAuthorManyToManyCreated1589993839046 implements MigrationInterface {
    name = 'BookToAuthorManyToManyCreated1589993839046'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "book_authors_author" ("bookId" uuid NOT NULL, "authorId" integer NOT NULL, CONSTRAINT "PK_963de00068693ab6e5767de614b" PRIMARY KEY ("bookId", "authorId"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_9bf58ffb2a12a8609a738ee8ca" ON "book_authors_author" ("bookId") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_a4cafdf2ec9974524a5321c751" ON "book_authors_author" ("authorId") `, undefined);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "author"`, undefined);
        await queryRunner.query(`ALTER TABLE "author" DROP CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871"`, undefined);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "author" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "author" ADD CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "book_authors_author" ADD CONSTRAINT "FK_9bf58ffb2a12a8609a738ee8cae" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "book_authors_author" ADD CONSTRAINT "FK_a4cafdf2ec9974524a5321c7516" FOREIGN KEY ("authorId") REFERENCES "author"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "book_authors_author" DROP CONSTRAINT "FK_a4cafdf2ec9974524a5321c7516"`, undefined);
        await queryRunner.query(`ALTER TABLE "book_authors_author" DROP CONSTRAINT "FK_9bf58ffb2a12a8609a738ee8cae"`, undefined);
        await queryRunner.query(`ALTER TABLE "author" DROP CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871"`, undefined);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "author" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`, undefined);
        await queryRunner.query(`ALTER TABLE "author" ADD CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id")`, undefined);
        await queryRunner.query(`ALTER TABLE "book" ADD "author" character varying NOT NULL`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_a4cafdf2ec9974524a5321c751"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_9bf58ffb2a12a8609a738ee8ca"`, undefined);
        await queryRunner.query(`DROP TABLE "book_authors_author"`, undefined);
    }

}
