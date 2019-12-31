import { createGlobalStyle } from "styled-components";

export const GlobalIconfont = createGlobalStyle`
    @font-face {
        font-family: "iconfont";
        src: url('./iconfont.eot?t=1544531915248'); /* IE9*/
        src: url('./iconfont.eot?t=1544531915248#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAb0AAsAAAAACdQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFY8eUjXY21hcAAAAYAAAABoAAABss1MnaZnbHlmAAAB6AAAAu4AAANsFb+3M2hlYWQAAATYAAAAMQAAADYTiOWUaGhlYQAABQwAAAAgAAAAJAfcA4ZobXR4AAAFLAAAABEAAAAUFAD//mxvY2EAAAVAAAAADAAAAAwBMgI8bWF4cAAABUwAAAAfAAAAIAEVAH9uYW1lAAAFbAAAAUUAAAJtPlT+fXBvc3QAAAa0AAAAPgAAAE/O2EWOeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2BkYWCcwMDKwMHUyXSGgYGhH0IzvmYwYuRgYGBiYGVmwAoC0lxTGByeMT97wtzwv4EhhrmRoQEozAiSAwDuWwzLeJztkTEOgCAMRV8BjSEexYmBmQM5eWbTa2ihDB7CTx6hP22HD7AA0TiMBHIhdJ3myvAjefiJZnVmIxA0atGq9/PA9z0l1uenb082Ybtk5dc+7jar1NNz+i9ocYZfHcsOvR3kBUAbGk94nEVSz2sbRxR+b2Z3RrvWSlrtakZyJMXa9e7mVyVZkndtQZUaEhqSnFJoQwIJSYgPTgip20vSQxxwLgEXfLd8jMk5pTiBgkrpP5BDMcX5Cxp6LsVadyy3FIZv3s957/sYIACHB/QZBShBAyCIBjjfxCiHvI6yEydSdAaIA0yUq4JNpE9HjYC+efnyDVXYXw5HZsUl4yW6+fDhJp1gfxQu94/zCoPGyHDruPlfViEAaGruIR2puRzyMAstgIYfNbiPXYeGkc841eNup4b+vM98L5zvncee73G1RMkV3U78KZLR8qV07+J9zN+98EBnROcruNcefLOAjaVmsnLrs37r9qnazHTQfv+eQnoazxdC30l/1qvf/tqK26e/zGWvBNf1aqVU7QT1f3dao3/Q5+DCWViAiwB6OBuFAxRS0VciKIszDb0wOtYoh01M4tlEaFKwIIc1dMXRar0QPfa/Q+BVerCoWSerrL2/sbHfzpyr8cX0ACuWq7X3v9/40GbVek5bQH1nB/UFJg8e2UJ4QtJHBalusUbebuVPTFm59S1CttZLGa+09ZY8zmdfDAkZvshbUyfy2+8IebftzHxEYQ9Vuz0syLQpC9sFqcAWwA7Tw9f0N7oGBvjQgctwA1YBDBRMF7MJJopYL8G4iR5H1sRY2UfMlRN1hBSu4ssnKiQe4xP66kiRdFUk7ilN8KhpUlGfZDGM4iOt1L8ZoDx+TDAe0l/GP5nr6d/T+LhOpnPjPWZS4hjELhvjXT1rEo187rSdItrjP7VhueUGweIPt74y4mJzutGXXkXnM60MZYbLVn/stlqyn/6VMSjjqxHJWjo588TEXYtiTlR8ZBlqMtI6WS0iZphO749f89+/o89fkctnxmuGKr9klG2uJqGZ1UnBRtuZc8a72tdOMVqOkqvuvZ2lojMjpX81PHdzjpdMG8tfzM89myuX0xWcsjR8cIMxPcvurGp4DS1slGUe0bQ4YrFW/4SwKSTwD4XFqkIAAHicY2BkYGAAYvt2Yfd4fpuvDNwsDCBww/TCaRj9/9//BhYG5kYgl4OBCSQKADfZDC8AAAB4nGNgZGBgbvjfwBDDwvD/HwMDCwMDUAQFsAIAdcUEa3icY2FgYGBBwf//AQAEAAISAAAAAAAAAAA8AIYA9gG2eJxjYGRgYGBlKGZgYwABJiDmAkIGhv9gPgMAFJYBlQB4nGWPTU7DMBCFX/oHpBKqqGCH5AViASj9EatuWFRq911036ZOmyqJI8et1ANwHo7ACTgC3IA78EgnmzaWx9+8eWNPANzgBx6O3y33kT1cMjtyDRe4F65TfxBukF+Em2jjVbhF/U3YxzOmwm10YXmD17hi9oR3YQ8dfAjXcI1P4Tr1L+EG+Vu4iTv8CrfQ8erCPuZeV7iNRy/2x1YvnF6p5UHFockikzm/gple75KFrdLqnGtbxCZTg6BfSVOdaVvdU+zXQ+ciFVmTqgmrOkmMyq3Z6tAFG+fyUa8XiR6EJuVYY/62xgKOcQWFJQ6MMUIYZIjK6Og7VWb0r7FDwl57Vj3N53RbFNT/c4UBAvTPXFO6stJ5Ok+BPV8bUnV0K27LnpQ0kV7NSRKyQl7WtlRC6gE2ZVeOEXpc0Yk/KGdI/wAJWm7IAAAAeJxjYGKAAC4G7ICVkYmRmZGFkZWRjYErLTEvPSUxKzMvnckxkb0wMzWjNDGPMzM5P0+3JLW4hIEBANLIC3MAAA==') format('woff'),
        url('./iconfont.ttf?t=1544531915248') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url('./iconfont.svg?t=1544531915248#iconfont') format('svg'); /* iOS 4.1- */
    }
        
    .iconfont {
        font-family:"iconfont" !important;
        font-size:16px;
        font-style:normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

`;