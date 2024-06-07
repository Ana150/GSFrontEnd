export const loadData = async () => {
   try {
     const response = await fetch('/data/clean_coral_data.json');
     if (!response.ok) {
       throw new Error('Failed to load JSON data');
     }
     const data = await response.json();
     return data;
   } catch (error) {
     console.error('Error loading JSON data:', error);
     return [];
   }
 };
