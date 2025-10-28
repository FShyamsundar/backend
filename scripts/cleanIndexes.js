import mongoose from 'mongoose';
import connectDB from '../src/config/db.js';

const cleanIndexes = async () => {
    try {
        await connectDB();
        
        const db = mongoose.connection.db;
        const collection = db.collection('recipes');
        
        // Get all indexes
        const indexes = await collection.indexes();
        console.log('Current indexes:', indexes);
        
        // Drop all indexes except _id
        for (const index of indexes) {
            if (index.name !== '_id_') {
                try {
                    await collection.dropIndex(index.name);
                    console.log(`Dropped index: ${index.name}`);
                } catch (err) {
                    console.log(`Could not drop index ${index.name}:`, err.message);
                }
            }
        }
        
        console.log('Index cleanup completed');
        process.exit(0);
    } catch (error) {
        console.error('Error cleaning indexes:', error);
        process.exit(1);
    }
};

cleanIndexes();