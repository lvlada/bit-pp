'stric mode';


(function(){
    console.log('Hi');
})();




function Product(name, price, date){
    this.id =(function(){
       var id = (Math.floor(Math.random() * 100000) + 1);
        return id;
    })(), 

    this.name = name,
    this.price = price,
    this.date = new Date(date).toLocaleDateString('en-US'),
    this.info = (function getInfo(){
        infoID = name[0] + name[1] + this.id;
        return infoID;
    })()

}

const product01 = new Product('Banana', 100, '01-23-2023' );

console.log(product01);


