class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

function insertNode(root,value)
{
    const newNode=new Node(value);
    if(!root){
        root=newNode;
        return root;
    }
  let  temp=root;
  while(temp){
      if(newNode.value === temp.value) return undefined;
      if(newNode.value<temp.value){
          if(temp.left==null){
              temp.left=newNode;
              return root;
          }
          temp=temp.left;
      }else{
           if(temp.right==null){
              temp.right=newNode;
              return root;
          }
          temp=temp.right;
      }
  }
}
let root = null;

// Inserting values
root = insertNode(root, 50);
root = insertNode(root, 40);
root = insertNode(root, 60);
root = insertNode(root, 45);
console.log(root);
