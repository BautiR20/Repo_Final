
import { dbFirebase } from "../config/firebase.js" 
import Product from "../models/productModel.js"


export const createPurchaseService = async (purchaseData) => {
    
    if(!purchaseData.items || !Array.isArray(purchaseData.items) || purchaseData.items.length === 0 ){
        const error = new Error("Items array is required and must not be empty")
        error.statusCode = 400
        throw error
    }

    let totalAmount = 0;
    const processedItems = [];

    
    for (const item of purchaseData.items) {
        const product = await Product.findById(item.productId);
        
        if (!product) {
            const error = new Error(`Product with ID ${item.productId} not found`);
            error.statusCode = 404;
            throw error;
        }

        if (product.quantity < item.quantity) {
            const error = new Error(`Not enough stock for product ${product.name}. Available: ${product.quantity}`);
            error.statusCode = 400;
            throw error;
        }

        const currentPrice = Number((product.price * product.profitRate).toFixed(2));
        totalAmount += currentPrice * item.quantity;

        processedItems.push({
            productId: item.productId,
            name: product.name,
            quantity: item.quantity,
            price: currentPrice,
            userId: purchaseData.userId
        });
    }

    
    for (const item of processedItems) {
        await Product.findOneAndUpdate(
            { _id: item.productId },
            { $inc: { quantity: -item.quantity } }
        );
    }

    
    const purchaseDataWithTimeStamp = {
        ...purchaseData,
        items: processedItems,
        totalAmount: Number(totalAmount.toFixed(2)),
        purchaseDate: new Date(), 
        status: "COMPLETED"
    }

    
    const docRef = await dbFirebase.collection("purchases").add(purchaseDataWithTimeStamp);

    return {
        id: docRef.id,
        ...purchaseDataWithTimeStamp
    }
}


export const getAllPurchasesService = async () => {
    
    const snapshot = await dbFirebase.collection("purchases")
        .orderBy("purchaseDate", "desc")
        .get();

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        purchaseDate: doc.data().purchaseDate?.toDate ? doc.data().purchaseDate.toDate() : doc.data().purchaseDate
    }));
}


export const getPurchasesByUserService = async (userId) => {
    try {
        
        const snapshot = await dbFirebase.collection("purchases")
            .where("userId", "==", userId)
            .orderBy("purchaseDate", "desc")
            .get();

        return snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            purchaseDate: doc.data().purchaseDate?.toDate ? doc.data().purchaseDate.toDate() : doc.data().purchaseDate
        }));

    } catch (error) {
        console.error("Error al buscar compras por usuario:", error);
        return [];
    }
}


export const getPurchaseByIdService = async (purchaseId) => {
    
    const docRef = dbFirebase.collection("purchases").doc(purchaseId);
    const docSnap = await docRef.get();

    if (!docSnap.exists) {
        const error = new Error("Purchase not found");
        error.statusCode = 404;
        throw error;
    }

    const data = docSnap.data();
    return {
        id: docSnap.id,
        ...data,
        purchaseDate: data.purchaseDate?.toDate ? data.purchaseDate.toDate() : data.purchaseDate
    };
}