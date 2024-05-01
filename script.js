
function createtable()
{

const tbl = document.createElement("table");
const tblBody = document.createElement("tbody");
for (let i = 0; i < 25; i++) {
    var row = document.createElement("tr");
                                        
            if (i==0)                                      
            {   var cell = document.createElement("td");        
                var celltext=document.createTextNode("time/date" )             
                cell.appendChild(celltext)
                row.appendChild(cell)                        
            }  
            
            else
            {
                var cell = document.createElement("td");
                var celltext=document.createTextNode(i +"hrs"+" ")
                cell.appendChild(celltext)
                row.appendChild(cell)
            }
            tbl.append(row)
            for(var j=1;j<=31;j++)
            {
                if( i==0) //1st row
                {
                    const cell = document.createElement("td");
                    const celltext=document.createTextNode("Jan "+j+" ")
                    cell.appendChild(celltext)
                    row.appendChild(cell)
                }
                else
                {
                    const cell = document.createElement("td");
                     //column id -24 ids
                     cell.id="row_"+i +"-col_"+j
                     console.log(cell);
                    //cell.id="row_"+i +"-col_"+j
                    // cell.id=  //31 ids
                    row.appendChild(cell);
                    
                }
            }
            tblBody.appendChild(row)
        }
        tbl.appendChild(tblBody);
        document.body.appendChild(tbl);
        tbl.setAttribute("border", "2");
        
    }

    createtable()

function tasker() {
    const start_time = parseInt(document.getElementById("stime").value, 10);
    const start_day = parseInt(document.getElementById("sday").value, 10);
    const end_time = parseInt(document.getElementById("endtime").value, 10);
    const end_day = parseInt(document.getElementById("endday").value, 10);
    const task = document.getElementById("task").value;

    for (let i = start_time; i <= end_time; i++) {
        for (let j = start_day; j <= end_day; j++) {
            const cellId = "row_" + i + "-col_" + j;
            console.log(cellId);
            const td = document.getElementById(cellId);

            // Create a div for each cell to hold the task name
            const taskDiv = document.createElement("div");
            taskDiv.textContent = task;

            // Add a border to the task cell
            td.style.border = "1px solid #0000ff"; // You can customize the border style

            // Append the task name div to the task cell
            td.appendChild(taskDiv);
        }
    }
}
