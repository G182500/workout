import { Pool } from "pg";

interface Params {
  category: string;
}

export async function GET(req: Request, { params }: { params: Params }) {
  try {
    const pool = new Pool({
      connectionString: process.env.CONNECTION_STRING,
      //Ex: postgres://user:password@host:port/database
    });
    const client = await pool.connect();

    const { category } = params;
    const exercisesByCategory = await client.query(
      `SELECT * FROM category WHERE name = '${category}'`
    );

    //Fazer um join com a tabela exercises usando o id da categoria

    client.release(); //close connection

    const hasExercises = exercisesByCategory.rows.length;

    return Response.json(
      {
        message: hasExercises
          ? "Sucesso ao buscar os exercícios da categoria"
          : "Categoria sem exercícios cadastrados",
        exercises: hasExercises ? exercisesByCategory.rows : [],
      },
      { status: 200 }
    );
  } catch {
    return Response.json(
      { message: "Erro ao buscar a categoria" },
      { status: 500 }
    );
  }
}
