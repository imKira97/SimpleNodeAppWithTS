//here we will define our todos structure


//if we dont write default after export it will be named exports

//interface is pure typescript function not available in JS hence when we compile this code we will not see this interface in JS file
export interface Todo{
    id:string;
    text:string;

}