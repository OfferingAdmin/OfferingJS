document.addEventListener('DOMContentLoaded', () => {
    const productDivs = document.querySelectorAll('.product, [class^="product-"]');
  
    productDivs.forEach((productDiv) => {
      // Create the overlay element
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      overlay.innerHTML = '<span>O</span>';
      productDiv.appendChild(overlay);
  
      // Create the tabular list element
      const tabularList = document.createElement('div');
      tabularList.classList.add('tabular-list');
      productDiv.appendChild(tabularList);
  
      // Insert your tabular list content into the tabularList element
      // For example:
      tabularList.innerHTML = `
        <table>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
          <tr>
            <td>Content 1</td>
            <td>Content 2</td>
          </tr>
        </table>
      `;
  
      // Toggle the tabular list visibility when the overlay is clicked
      overlay.addEventListener('click', () => {
        tabularList.style.display = tabularList.style.display === 'none' ? 'block' : 'none';
      });
    });
  });
  