using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Repository.test
{
    [TestClass]
    public class UnitTest1
    {
        private Repository SystemUnderTest;

        [TestInitialize]
        public void TestVoid()
        {
            SystemUnderTest = new Repository();
        }


        [TestMethod]
        public void TestGetSchoolList()
        {
            var result = SystemUnderTest.GetSchoolList();
            Assert.IsNotNull(result);
        }
    }
}
