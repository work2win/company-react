import React from 'react';
import axios from 'react-axios';
class Service extends React.Component{

    getCompany(){
        return axios.get("http://localhost:9091/company");
    }

    createComp(data){
        console.log("inside createComp");
        return axios.Post("http://localhost:9091/company",data);
    }
}

export default  Service;


