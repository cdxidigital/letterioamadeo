import fetch from 'node-fetch';

async function testAPI() {
  try {
    const response = await fetch('http://localhost:5000/api/content');
    const data = await response.json();
    console.log('API Response Structure:');
    console.log('Success:', data.success);
    console.log('Items count:', data.items?.length);
    if (data.items && data.items.length > 0) {
      console.log('First item keys:', Object.keys(data.items[0]));
      console.log('First item sample:', {
        id: data.items[0].id,
        title: data.items[0].title,
        category: data.items[0].category,
        imageUrl: data.items[0].imageUrl,
        image_url: data.items[0].image_url,
        isNSFW: data.items[0].isNSFW,
        is_nsfw: data.items[0].is_nsfw
      });
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

testAPI();