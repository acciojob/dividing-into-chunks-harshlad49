   function divide(arr, n) {
      const result = [];
      let currentChunk = [];
      let currentSum = 0;

      for (let i = 0; i < arr.length; i++) {
        const num = arr[i];

        if (currentSum + num <= n) {
          currentChunk.push(num);
          currentSum += num;
        } else {
          if (currentChunk.length > 0) {
            result.push(currentChunk);
          }
          currentChunk = [num];
          currentSum = num;
        }
      }

      if (currentChunk.length > 0) {
        result.push(currentChunk);
      }

      return result;
    }

    function divideArray() {
      const input = document.getElementById('arrayInput').value;
      const maxSum = parseInt(document.getElementById('maxSum').value, 10);

      if (!input || isNaN(maxSum)) {
        document.getElementById('result').textContent = 'Please enter a valid array and number.';
        return;
      }

      const array = input.split(',').map(Number);
      const chunks = divide(array, maxSum);
      document.getElementById('result').textContent = 'Result: ' + JSON.stringify(chunks);
    }