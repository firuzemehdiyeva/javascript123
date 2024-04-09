https://fakestoreapi.com/products

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(mehsul => {
    const productImages = mehsul.map(product => product.image);
    const slider = document.getElementById('slider');
    let currentIndex = 0;

    const updateSlider = () => {
      slider.style.transform = `translateX(-${currentIndex * 50}%)`;
    };

    const changeSlide = (increment) => {
      currentIndex = (currentIndex + increment + productImages.length) % productImages.length;
      updateSlider();
    };

    document.getElementById('ilkbtn').addEventListener('click', () => changeSlide(-1));
    document.getElementById('sonbtn').addEventListener('click', () => changeSlide(1));

    productImages.forEach(imageURL => {
      const img = document.createElement('img');
      img.src = imageURL;
      slider.appendChild(img);
      
    });

    updateSlider();
  });

