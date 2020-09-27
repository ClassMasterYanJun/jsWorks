const $btn = document.getElementById('btn-kick');
const $btn_light = document.getElementById('btn-lightning');
const characterType = 'character';
const enemyType = 'enemy';
let arrayId = [
    
    'health',
    'progressbar',
    
];

let arrayOj =[]; 
let arrElem =[];

class Pokemon{
    constructor(name, damageHP){
        
        this.name = name;
        this.defaultHP = 100;
        this.damageHP = damageHP;

    }
}

class Person extends Pokemon{
    
    constructor(name, damageHP ,type){
        
        super(name, damageHP);

        this.type = type;
        this.elHP;
        this.elProgressbar;

    }

    static creat(name, damageHP ,type){

        return new Person(name, damageHP ,type);

    }

    render(){
          
        arrayId.forEach(e =>{
            
           arrElem.push(document.getElementById(e + '-' + this.type));
             
        });

        this.elHP =  arrElem[0];
        this.elProgressbar = arrElem[1];

        this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
        this.elProgressbar.style.width = this.damageHP + '%';

        arrElem.length = 0 ;
    }

}

function Inint(){
    
    let data = [
        {name: 'Pikachu', damage: 100, type: characterType},
        {name: 'Charmander', damage: 100, type: enemyType}
    ];
    
    data.forEach(value => {
        arrayOj.push( Person.creat(value.name, value.damage, value.type ));
    });
    
    arrayOj.forEach(e => {e.render()});

}

$btn.addEventListener('click', function(){
    
    chengeHP(20, arrayOj[0]);
    chengeHP(20, arrayOj[1]);

});

$btn_light.addEventListener('click', function(){

    chengeHP(9, arrayOj[1]);

});

function chengeHP(num, person){

    let count = ramdom(num)

    if(person.damageHP < count){

        person.damageHP = 0;
        $btn.disabled = true;
        $btn_light.disabled =true;
        alert('Бой проиграл: ' + person.name);

    } else {

        person.damageHP -= count;

    }

    arrayOj.forEach(e => {e.render()});

}

function ramdom(num){

    return Math.ceil(Math.random() * num);

}

Inint();