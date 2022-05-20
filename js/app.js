const sections = document.querySelectorAll('.section');
const controlBg = document.querySelectorAll('.control-bg');
const switchBg = document.querySelectorAll('.switch-bg');
const bodyContent = document.querySelector('.main-content');

function switchBtn() {
	for (let i = 0; i < switchBg.length; i++) {
		switchBg[i].addEventListener('click', function () {
			const currentActiveBtn = document.querySelectorAll('.active-btn');
			currentActiveBtn[0].className = currentActiveBtn[0].className.replace(
				'active-btn',
				'',
			);
			this.className += ' active-btn';
		});
	}

	bodyContent.addEventListener('click', (e) => {
		const dataId = e.target.dataset.id;
		if (dataId) {
			controlBg.forEach((i) => {
				i.classList.remove('active');
			});
			e.target.classList.add('active');

			sections.forEach((sec) => {
				sec.classList.remove('active');
			});
			const idElements = document.getElementById(dataId);
			idElements.classList.add('active');
		}
	});
}
// ? Toggle Theme

const themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', theme);
function theme() {
	const element = document.querySelector('body');
	element.classList.toggle('light-mode');
	
}

// function switchTheme() {
// 	theme.addEventListener('click', () => {
// 		document.body.classList.toggle('dark');
// 		if (document.body.classList.contains('dark')) {
// 			theme.innerHTML = '<i class="fas fa-sun"></i>';
// 		} else {
// 			theme.innerHTML = '<i class="fas fa-moon"></i>';
// 		}
// 		if (!document.body.classList.contains('dark')) {
// 			theme.innerHTML = '<i class="fas fa-moon"></i>';
// 		}
// 	});
// }

switchBtn();

/*
  ! Can't find solution for using foreEach!!!!
  let switchbtns = switchBg.forEach((e) => {
    e.addEventListener('click', function () {
      const currentActiveBtn = document.querySelectorAll('.active-btn');
      currentActiveBtn[0].className = currentActiveBtn[0].className.replace(
        'active-btn',
        '',
      );
      this.className += ' active-btn';
    });
  });
  */

// const dataId = e.target.dataset.dataId;
// if (dataId) {
// 	controlBg.forEach((i) => {
// 		i.classList.remove('active');
// 	});
// 	e.target.classList.add('active');
// 	sections.forEach((sec) => {
// 		sec.classList.remove('active');
// 	});
// 	const idElements = document.getElementById(id);
// 	idElements.classList.add('active');
// }
