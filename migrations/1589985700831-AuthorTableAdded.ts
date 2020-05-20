import {MigrationInterface, QueryRunner} from "typeorm";

export class AuthorTableAdded1589985700831 implements MigrationInterface {
    name = 'AuthorTableAdded1589985700831'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "author" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "author"`, undefined);
    }

}
