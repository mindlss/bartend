import express from 'express';
import dotenv from 'dotenv';
import { logger } from '@utils/logger';

import checkRoutes from '@routes/checks';
import glassRoutes from '@routes/glassTypes';
import ingredientRoutes from '@routes/ingredients';
import eventRoutes from '@routes/inventoryEvents';
import recipeRoutes from '@routes/recipes';
import reservationRoutes from '@routes/reservations';
import shiftRoutes from '@routes/shifts';
import userRoutes from '@routes/users';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/checks', checkRoutes);
app.use('/glassTypes', glassRoutes);
app.use('/ingredients', ingredientRoutes);
app.use('/inventoryEvents', eventRoutes);
app.use('/recipes', recipeRoutes);
app.use('/reservations', reservationRoutes);
app.use('/shifts', shiftRoutes);
app.use('/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    logger.info(`Backend is up and running on http://localhost:${PORT}`);
});
