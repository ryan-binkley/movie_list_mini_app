/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export const seed = async (knex) => {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert(
    [
      {  name: 'John Doe' },
      {  name: 'Jane Smith' },
      {  name: 'Bob Johnson' },
      {  name: 'Samantha Lee' },
      {  name: 'Tom Brown' },
      {  name: 'Mary Nguyen' },
      {  name: 'Chris Kim' },
      {  name: 'Avery Chen' },
      {  name: 'Emily Davis' },
      {  name: 'Joshua Rodriguez' },
      {  name: 'Julia Martinez' },
      {  name: 'Ryan Anderson' },
      {  name: 'Christina Wilson' },
      {  name: 'Jordan Thompson' },
      {  name: 'Sarah Baker' },
      {  name: 'Brandon Lee' },
      {  name: 'Olivia Wang' },
      {  name: 'Michael Hernandez' },
      {  name: 'Lauren Taylor' },
      {  name: 'David Kim' }
    ]    
  );
};