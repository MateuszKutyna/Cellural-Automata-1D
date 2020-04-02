const patern_1=[1,1,1];
const patern_2=[1,1,0];
const patern_3=[1,0,1];
const patern_4=[1,0,0];
const patern_5=[0,1,1];
const patern_6=[0,1,0];
const patern_7=[0,0,1];
const patern_8=[0,0,0];

class CA{
    
    cells=[];
    rulesetNumber;
    ruleset;
    boundaryCondition;
    iterations;
    
    constructor(_rN,_gen){

        this.iterations=_gen;
        this.rulesetNumber=_rN;
        
        this.setRule();
        for(let i =0;i<cnv.width/scl;i++){
            this.cells[i]=0;
        }
        
        this.cells[Math.floor((cnv.width/scl)/2)]=1;
    }
    
    setRule() {
        if(this.rulesetNumber===30){
            this.ruleset=[0,0,0,1,1,1,1,0];
        }else if(this.rulesetNumber===60){
            this.ruleset=[0,0,1,1,1,1,0,0];
        }else if(this.rulesetNumber===90){
            this.ruleset=[0,1,0,1,1,0,1,0];
        }else if(this.rulesetNumber===120){
            this.ruleset=[0,1,1,1,1,0,0,0];
        }else{
            this.ruleset=[1,1,1,0,0,0,0,1];
        }
        return 0;
    }

    generate(){
        let nextGeneration=[];
            
        for(let i = 1;i<this.cells.length;i++){
            nextGeneration[i]=this.rules(this.cells[i-1],this.cells[i],this.cells[i+1]);
        }
        nextGeneration[0]=this.rules(this.cells[this.cells.length-1],this.cells[0],this.cells[1])
        nextGeneration[this.cells.length-1]=this.rules(this.cells[this.cells.length-2],this.cells[this.cells.length-1],this.cells[0])
        this.cells=nextGeneration;
        
        this.iterations--;
    }

    rules(left,mid,right){
        if(left===patern_1[0]&&mid===patern_1[1]&&right===patern_1[2])return this.ruleset[0];
        else if(left===patern_2[0]&&mid===patern_2[1]&&right===patern_2[2])return this.ruleset[1];
        else if(left===patern_3[0]&&mid===patern_3[1]&&right===patern_3[2])return this.ruleset[2];
        else if(left===patern_4[0]&&mid===patern_4[1]&&right===patern_4[2])return this.ruleset[3];
        else if(left===patern_5[0]&&mid===patern_5[1]&&right===patern_5[2])return this.ruleset[4];
        else if(left===patern_6[0]&&mid===patern_6[1]&&right===patern_6[2])return this.ruleset[5];
        else if(left===patern_7[0]&&mid===patern_7[1]&&right===patern_7[2])return this.ruleset[6];
        else return this.ruleset[7];

    }

    get iterations(){
        return this.iterations;
    }
    get cells(){
        return this.cells;
    }
    
}



