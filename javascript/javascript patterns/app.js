const ItemFF=(
    
    function  () {
        let A1=[23,12,54,22]
        let A=[22,45,44,32,33]
       let array=function(){console.log('hey there')
        
       A1.forEach(element => {
           console.log(element)
       });}

       let Even=function  () {
            
            A.forEach(element => {
                if(element%2==0){
                    console.log(`${element} is even`)
                }else{
                    console.log(`${element} is odd`)
                }
            });
       }

       return{
           data:array,
           data1:Even,
            same:function  () {
                console.log(A1)
            }
       }
    }

    
    
)()

 ItemFF.data()
ItemFF.data1()
ItemFF.same()
 