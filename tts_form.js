document.write(`
<div class="col-sm-2 " style="float: left;" >
<style>

@media screen and (max-width: 1800px) {
  div.floatdiv {
    display: none;
  }
}
</style>

  <div class="row">
  <div class ="floatdiv">
    <div id="floatdiv">
      <div style="margin:0; font-size: 12px;">
        <div style= "margin: 54px 60px 10px 80px;">
        
        <select id="speed">
          <option value ="1.0">1배속</option>
          <option value ="1.2">1.2배속</option>
          <option value ="1.5">1.5배속</option>
          <option value ="1.75">1.75배속</option>
          <option value ="2.0">2배속</option>
        </select>

        <select id="thepitch">
          <option value ="0"> 음 높이1 </option>
          <option value ="1"> 음 높이2 </option>
          <option value ="2"> 음 높이3 </option>
        </select>
        <br>
          </div>
      
        <textarea id="text" rows="30" cols="50" ></textarea>
        <div style = "margin: 5px 0px 0px 120px;">
        <button id="btn-read">시작</button>
        <button id="btn-stop">정지</button>
        </div>
      
       </div>

</div>
</div>
</div>
</div>
`);