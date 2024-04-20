export class Product {
    constructor(
        flavorName = '',
        ingredients = [],
        glutenFree = false,
        sugarFree = false,
        seasonal = false,
        kosher = false,
        imageUrl = '',
        groupName = []
    ) {
        this.flavorName = flavorName;
        this.ingredients = ingredients;
        this.glutenFree = glutenFree;
        this.sugarFree = sugarFree;
        this.seasonal = seasonal;
        this.kosher = kosher;
        this.imageUrl = imageUrl;
        this.groupName = groupName;
    }
}
