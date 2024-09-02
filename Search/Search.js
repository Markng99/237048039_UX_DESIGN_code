document.addEventListener('DOMContentLoaded', function() {
const fakeResults = [
  { title: "Ring: A Biography of Ring Lardner", link: "C:/Users/admin/Desktop/code/123/templates/Book_details/Book_details.html" },
  { title: "The Ring of the Nibelung", link: "https://example.com/ring-nibelung" },
  { title: "The Lord of the Rings", link: "https://example.com/lord-of-the-rings" },
  { title: "Harry Potter and the Philosopher's Stone", link: "https://example.com/harry-potter-1" },
  { title: "To Kill a Mockingbird", link: "https://example.com/to-kill-a-mockingbird" },
  { title: "1984", link: "https://example.com/1984" },
  { title: "Pride and Prejudice", link: "https://example.com/pride-and-prejudice" }
];

function displayResults(results) {
  const resultsContainer = document.getElementById('searchResults');
  resultsContainer.innerHTML = '';

  const ul = document.createElement('ul');
  ul.className = 'list-none p-0';

  results.forEach(result => {
    const li = document.createElement('li');
    li.className = 'mb-2 p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200';
    li.textContent = result.title;
    li.onclick = () => window.location.href = result.link;
    ul.appendChild(li);
  });

  resultsContainer.appendChild(ul);
}

function searchResults(query) {
  return fakeResults.filter(result => 
    result.title.toLowerCase().includes(query.toLowerCase())
  );
}

document.getElementById('searchInput').addEventListener('input', (e) => {
  const query = e.target.value.trim();
  if (query.length > 0) {
    const filteredResults = searchResults(query);
    displayResults(filteredResults);
  } else {
    document.getElementById('searchResults').innerHTML = '';
  }
});
});