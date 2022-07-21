
import db from "../config/db.js";

import dotenv from "dotenv";

dotenv.config();
//import { OPERATION_SUCCESS, OPERATION_FAILED } from "../functions/response.js";

export const saveEmployee = async (req, res) => {
   console.log("body:"+JSON.stringify(req.body));
   let employee = req.body.employee;
   let result = null;
   let employeeRecord = await db.collection("employee").find({name: {"$regex":employee.name,"$options":"i"}}).toArray();
   if(employeeRecord ==null || employeeRecord.length <=0){
    let insertResult = await db.collection('employee').insertOne(
        {
         
         emp_Id:employee.empId, 
         name:employee.name,
           phone_No:employee.phoneNo,
           mail_id:employee.email
           
  
         });
    try{
       if(insertResult) {
        result = employee.name + " inserted successfully";
        let finalResult= {
            statusCode: 200,
            status: 'SUCCESS',
            message:"successfully inserted",
            result:result,
        
        }
        return res.json(finalResult)   
    }
    

      else{
      result = employee.name + " already existed in system";

      let finalResult= {
        statusCode: 400,
        status: 'FAILED',
        message:"already existed in system",
        result:result,
     }
        return res.json(finalResult)
    
   }
   //console.log(result);
   //return res.send(result);

   }
   catch (error) {
    console.error(error);

    let finalResult= {
        statusCode: 400,
        status: 'OPERATION_FAILED',
        message:"ERROR",
        result:result,
    }
        return res.json(finalResult)
    

  
}

}
else{
    result = employee.name + " already existed in system";

      let finalResult= {
        statusCode: 400,
        status: 'FAILED',
        message:"already existed in system",
        result:result,
     }
        return res.json(finalResult)

}
}
  
export const getEmloyee= async(req,res)=>{
   let employeeRecords=await db.collection('employee').findOne({
        name: req.query.name
    }
    
 );
 try{
 let result=null;
 if(employeeRecords!=null){
    result = req.query.name + " there ";

    let finalResult= {
        statusCode: 200,
        status: 'SUCCESS',
        message:"employee in",
        result:result,
    
    }
    return res.json(finalResult) 
 }
 else{
     result =req.query.name+ " not there";

     let finalResult= {
        statusCode: 400,
        status: 'FAILED',
        message:"not existed in system",
        result:result,
    }
        return res.json(finalResult)
    }
   // console.log(result);
    //res.json(result);
 }
 catch (error) {
    console.error(error); 

    let finalResult= {
        statusCode: 400,
        status: 'OPERATION_FAILED',
        message:"ERROR",
        result:result,
    }
        return res.json(finalResult)
 }
}
//hi every one