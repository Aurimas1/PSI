using System.Collections.Generic;
using System.Data.SqlClient;
using Shared;

namespace Repository
{
    public class Repository
    {
        private const string ConnectionString = "Data Source=(LocalDB)\\MSSQLLocalDB;AttachDbFilename=\"C:\\Users\\Aurimas\\documents\\visual studio 2017\\Projects\\Psi.Backend\\API\\App_Data\\School.mdf\";Integrated Security=True";

        public IEnumerable<ISchool> GetSchoolList()
        {
            var result = new List<School>();

            using (SqlConnection connection = new SqlConnection(ConnectionString))
            using (SqlCommand command = new SqlCommand("SELECT * from School", connection))
            {
                connection.Open();
                using (SqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        result.Add(new School(
                            int.Parse(reader["Id"].ToString()),
                            reader["Name"].ToString(),
                            reader["Foto"].ToString(),
                            reader["District"].ToString(),
                            reader["Address"].ToString(),
                            reader["Number"].ToString(),
                            reader["Email"].ToString()
                            ));
                    }
                }
            }

            return result;
        }

        public IEnumerable<ISchool> GetSchoolsBy(string date, string[] names = null, string[] districts = null)
        {
            if (names == null && districts == null)
                return GetSchoolList();

            var result = new List<School>();

            var commandText = "SELECT * FROM School WHERE";
            if (names != null)
                foreach (var name in names)            
                    commandText += $" Name LIKE '%{name}%' OR";
            if (districts != null)
                foreach (var district in districts)
                    commandText += $" District LIKE '%{district}%' OR";
            if (names != null)
                commandText += $" Name LIKE '%{names[0]}%';";
            else           
                commandText += $" District LIKE '%{districts[0]}%';";
            
            using (SqlConnection connection = new SqlConnection(ConnectionString))
            using (SqlCommand command = new SqlCommand(commandText, connection))
            {
                connection.Open();
                using (SqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        result.Add(new School(
                            int.Parse(reader["Id"].ToString()),
                            reader["Name"].ToString(),
                            reader["Foto"].ToString(),
                            reader["District"].ToString(),
                            reader["Address"].ToString(),
                            reader["Number"].ToString(),
                            reader["Email"].ToString()
                        ));
                    }
                }
            }

            return result;
        }
    }




}
