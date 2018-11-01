
const fs=require('fs');
function utilFunctions()
{
this.loggerinfo=function(comment)
{
    fs.appendFile('logger.txt',"\n"+comment, (err) => {
    if (err) throw err;
    console.log('The data to append was appended to file!');
  });
}
}

module.exports=utilFunctions;
