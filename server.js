const express = require('express');
const app = express();
const port = 3000;
const simulatedData = [
    {
      title: "March Grocery",
      category: "Groceries",
      amount: "$200",
      type: "Debit",
      date: "2024-04-01",
    },
    {
      title: "Utility Bill",
      category: "Utilities",
      amount: "$150",
      type: "Debit",
      date: "2024-04-02",
    },
    {
      title: "Movie Night",
      category: "Entertainment",
      amount: "$100",
      type: "Debit",
      date: "2024-04-03",
    },
  ];

app.use('/public', express.static('public'));

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})

app.get('/simulatedData', function(req,res){
    value = new StringBuilder();
    for(let i = 0; i <= simulatedData.length; i++){
        value.append(categories[i])
    }
    res.type("json");
    res.send("All the data in simulatedData is"+ value.toString());
});

app.post('/addExpense', (req,res)=> {
  const expense = req.body;
  if(!expense.place || !expense.date || !expense.amount || !expense.category || !expense.payment){
    console.log("Error, all expenses required");
  }
  simulatedData.push(expense);
});
