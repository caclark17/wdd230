const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener("click", function () {
        let favScrip = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = favScrip;
        listItem.appendChild(listBtn);
        listBtn.textContent = '❌';
        list.appendChild(listItem);

        newButton.addEventListener("click", function () {
          list.removeChild(listItem);
        });
      });

        input.focus();
      }