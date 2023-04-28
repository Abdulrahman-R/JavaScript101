//المكتبة
//2D Array
let library = [
    ['ID', 'BoockName', 'AuthorName','Price','Quantity'],
    ['1', 'Start with why', 'Simon Sinek',80.0,13],
    ['2', 'But how do it know','J. Clark Scott',59.9,22],
    ['3', 'Clean Code','Robert Cecil Martin',50.0,5],
    ['4', 'Zero to One','Peter Thiel',45.0,12],
    ['5', 'You don\'t know JS','Kyle Simpson',39.9,0]
    ];
 
   // console.log(library);


    //إضافة كتاب

    function addBook(ID,BoockName,AuthorName,Price,Quantity){

        let NewRaw = [ ID,BoockName,AuthorName,Number(Price),Number(Quantity)];
        library.push(NewRaw);
    }

    //test
    //addBook('6','The lord of the flies','William Golding',70.0,3);
    //console.log(library);

   
    //حذف كتاب 

    function deleteBook(ID){
      
        for(let row =0; row < library.length;row++){
            if(library[row][0] == ID ){
                library.splice(row,1);
                return;
            }
       }

       console.log('The book you want to delete doesn\'t exist');
       
    }
    
    //test
    //deleteBook(1);
    //console.log(library);
 
    // التعديل على المعلومات
    function ModifyInfo(raw,column,modification){
        let libraryRows=0;
        let libraryColumns=0;
        for(libraryRows; libraryRows < library.length ;libraryRows++){
            
            for(libraryColumns; libraryColumns < library[libraryRows].length;libraryColumns++){

            }
        }

        //console.debug( libraryRows + " : " + libraryColumns )
         if(raw <= libraryRows &  column <= libraryColumns){
            if(column ==3 | column==4 )
            library[raw][column] = Number(modification);
            else
            library[raw][column] = modification;
        }else{
            console.debug('The cell you would like to reach doesn\'t exist')
        }
      
    }

    //test
    //ModifyInfo(1,1,'End with why');
    //console.log(library);



    //طرق البحث عن الكتب 
    function bookInfoBYId(ID){

        for(let row =0; row < library.length;row++){
             if(library[row][0] == ID ){
                 for(let i = 0; i < library[row].length;i++){
                    console.log(library[0][i] + ': '+library[row][i]);
                 }
                 return;
             }
        }

        console.log('The book you requested is not available');
    }

    //test
    //bookInfoBYId(2);

    function bookInfoBYTitle(Title){

        for(let row =0; row < library.length;row++){
             if((library[row][1]).toLowerCase() == Title.toLowerCase()){
                 for(let i = 0; i < library[row].length;i++){
                    console.log(library[0][i] + ': '+library[row][i]);
                 }
                 return;
             }
        }

        console.log('The book you requested is not available');
    }

    //test
    //bookInfoBYTitle('Zero to One');

    function bookInfoBYAuthor(Author){

        for(let row =0; row < library.length;row++){
             if((library[row][2]).toLowerCase() == Author.toLowerCase()){
                 for(let i = 0; i < library[row].length;i++){
                    console.log(library[0][i] + ': '+library[row][i]);
                 }
                 return;
             }
        }

        console.log('The book you requested is not available');
    }

    //test
    //bookInfoBYAuthor('Robert Cecil Martin');


    //شراء وتصدير الفاتورة

    function buyBook(BoockName,Quantity,userBalance){

          if(CheackTitle(BoockName) == true){
                if(RetriveQuantity(BoockName) >= Quantity){
                        if(RetrivePrice(BoockName)* Quantity <= userBalance ){
                                console.log('Your purchase has done successfully');
                                console.log('Purchase information:\n'
                                            +'BoockName: '+  BoockName +'\n'
                                            +'Quantity: '+ Quantity + '\n'
                                            +'Total Price: ' + RetrivePrice(BoockName)*Quantity);
                               updateStock(BoockName,Quantity);            
                        }else{
                            console.log('Your balance is not enough');
                        }
                }else{
                    console.log('The book requested is out of stock');
                }
          }else{
            console.log("The book requested does not exist.");
          }
    }


    function CheackTitle(BoockName){
        for(let row =0; row < library.length;row++){
            if((library[row][1]).toLowerCase() == BoockName.toLowerCase()){
                    return true
                }
               
         }
         return false;
    }

    function RetriveQuantity(BoockName){

        for(let row =0; row < library.length;row++){
            if((library[row][1]).toLowerCase() == BoockName.toLowerCase()){
                    return library[row][4];
                }
               
         }
    }

    function updateStock(BoockName,Quantity){
        for(let row =0; row < library.length;row++){
            if((library[row][1]).toLowerCase() == BoockName.toLowerCase()){
                     library[row][4] -= Quantity;
                }
               
         }
         console.log("The Updated Stock:");
         console.log(library);
    }

    function RetrivePrice(BoockName){

        for(let row =0; row < library.length;row++){
            if((library[row][1]).toLowerCase() == BoockName.toLowerCase()){
                    return library[row][3];
                }
               
         }
    }
   
  //test  
 // buyBook('Start with why',2,200);
 //buyBook('You don\'t know JS',1,1000);
 //buyBook('You don\'t know JS5446',1,1000);

    

  