function tete(){

   document.getElementById("textarea1").value += '<?xml version="1.0" encoding="utf-8"?>\n';

}

function f1(){

   document.getElementById("textarea1").value += '	<plu:Titre id="Votre_id" intitule="Titre" idZone="porteeGenerale" idPrescription="nonConcerne" inseeCommune="num_commune" niveau="1">\n		<plu:Contenu id="d1e677" idZone="porteeGenerale" idPrescription="nonConcerne">\n			<h1>Entrez_votre_titre</h1>\n			<div>Insérez_le_contenu_ici</div>\n';

}
function f2(){

  document.getElementById("textarea1").value += '		<plu:Titre id="Votre_id" intitule="Titre" idZone="porteeGenerale" idPrescription="nonConcerne" inseeCommune="num_commune" niveau="2">\n			<plu:Contenu id="d1e677" idZone="porteeGenerale" idPrescription="nonConcerne">\n				<h2>Entrez_votre_titre</h2>\n				<div>Insérez_le_contenu_ici</div>\n';

}
function f3(){

  document.getElementById("textarea1").value += '			<plu:Titre id="Votre_id" intitule="Titre" idZone="porteeGenerale" idPrescription="nonConcerne" inseeCommune="num_commune" niveau="3">\n				<plu:Contenu id="d1e677" idZone="porteeGenerale" idPrescription="nonConcerne">\n					<h3>Entrez_votre_titre</h3>\n					<div>Insérez_le_contenu_ici</div>\n';

}
function f4(){

  document.getElementById("textarea1").value += '				<plu:Titre id="Votre_id" intitule="Titre" idZone="porteeGenerale" idPrescription="nonConcerne" inseeCommune="num_commune" niveau="4">\n					<plu:Contenu id="d1e677" idZone="porteeGenerale" idPrescription="nonConcerne">\n						<h4>Entrez_votre_titre</h4>\n						<div>Insérez_le_contenu_ici</div>\n';

}
function f5(){

  document.getElementById("textarea1").value += '					<plu:Titre id="Votre_id" intitule="Titre" idZone="porteeGenerale" idPrescription="nonConcerne" inseeCommune="num_commune" niveau="5">\n						<plu:Contenu id="d1e677" idZone="porteeGenerale" idPrescription="nonConcerne">\n							<h5>Entrez_votre_titre</h5>\n							<div>Insérez_le_contenu_ici</div>\n';

}

function f6(){

  document.getElementById("textarea1").value += '		<plu:Contenu id="d1e677" idZone="porteeGenerale" idPrescription="nonConcerne">\n			<h1>Entrez votre titre</h1>\n			<div>Insérez le contenu ici</div>\n';

}
function f7(){

  document.getElementById("textarea1").value += '			<div>Insérez_le_contenu_ici</div>\n';

}
function f8(){

  document.getElementById("textarea1").value += '		</plu:Contenu>\n';

}
function f9(){

  document.getElementById("textarea1").value += '			<div>Titre_de_l_image</div>\n			<div>\n				<p class="center">\n					<img src="source/nom_image" alt="0"/>\n				</p>\n			</div>\n';

}

function f10(){

  document.getElementById("textarea1").value += '	</plu:Titre>\n';

}

function f11() {
  const content = document.getElementById("textarea1").value;
  var save = document.createElement("a");
  save.setAttribute("href", "data:text/plain;charset=umenttttf-8," + encodeURI(content));
  save.setAttribute("download", content.slice(0, 17) + ".txt");

  document.body.appendChild(save);
  save.click();
  document.body.removeChild(save);
}

function f12(){

  document.getElementById("textarea1").value += '			<plu:Contenu id="d1e677" idZone="porteeGenerale" idPrescription="nonConcerne">\n				<h2>Entrez votre titre</h2>\n				<div>Insérez le contenu ici</div>\n';

}

function f13(){

  document.getElementById("textarea1").value += '				<div>Insérez_le_contenu_ici</div>\n';

}

function f14(){

  document.getElementById("textarea1").value += '			</plu:Contenu>\n';

}

function f15(){

  document.getElementById("textarea1").value += '				<div>Titre_de_l_image</div>\n				<div>\n					<p class="center">\n						<img src="source/nom_image" alt="0"/>\n					</p>\n				</div>\n';

}

function f16(){

  document.getElementById("textarea1").value += '		</plu:Titre>\n';

}

function f17(){

  document.getElementById("textarea1").value += '				<plu:Contenu id="d1e677" idZone="porteeGenerale" idPrescription="nonConcerne">\n					<h3>Entrez votre titre</h3>\n					<div>Insérez le contenu ici</div>\n';

}

function f18(){

  document.getElementById("textarea1").value += '					<div>Insérez_le_contenu_ici</div>\n';

}

function f19(){

  document.getElementById("textarea1").value += '				</plu:Contenu>\n';

}

function f20(){

  document.getElementById("textarea1").value += '					<div>Titre_de_l_image</div>\n					<div>\n						<p class="center">\n							<img src="source/nom_image" alt="0"/>\n						</p>\n					</div>\n';

}

function f21(){

  document.getElementById("textarea1").value += '			</plu:Titre>\n';

}

function f22(){

  document.getElementById("textarea1").value += '					<plu:Contenu id="d1e677" idZone="porteeGenerale" idPrescription="nonConcerne">\n						<h4>Entrez votre titre</h4>\n						<div>Insérez le contenu ici</div>\n';

}

function f23(){

  document.getElementById("textarea1").value += '						<div>Insérez_le_contenu_ici</div>\n';

}

function f24(){

  document.getElementById("textarea1").value += '					</plu:Contenu>\n';

}

function f25(){

  document.getElementById("textarea1").value += '						<div>Titre_de_l_image</div>\n						<div>\n							<p class="center">\n								<img src="source/nom_image" alt="0"/>\n							</p>\n						</div>\n';

}

function f26(){

  document.getElementById("textarea1").value += '				</plu:Titre>\n';

}

function f27(){

  document.getElementById("textarea1").value += '						<plu:Contenu id="d1e677" idZone="porteeGenerale" idPrescription="nonConcerne">\n							<h5>Entrez votre titre</h5>\n							<div>Insérez le contenu ici</div>\n';

}

function f28(){

  document.getElementById("textarea1").value += '							<div>Insérez_le_contenu_ici</div>\n';

}

function f29(){

  document.getElementById("textarea1").value += '						</plu:Contenu>\n';

}

function f30(){

  document.getElementById("textarea1").value += '							<div>Titre_de_l_image</div>\n							<div>\n								<p class="center">\n									<img src="source/nom_image" alt="0"/>\n								</p>\n							</div>\n';

}

function f31(){

  document.getElementById("textarea1").value += '					</plu:Titre>\n';

}

function showSelectedFile(){
    selectedfile.value= document.getElementById("inputfile").value; 
}

function openFile(){
    inoutfile2.value.window.open(selectedfile2,'_blank'); 
}

document.getElementById('inputfile')
        .addEventListener('change', function() {
        var fr=new FileReader();
        fr.onload=function(){
            document.getElementById('textarea1')
                    .textContent=fr.result;
        }
        fr.readAsText(this.files[0]);
        })



function saveTextAsFile(textToWrite, fileNameToSaveAs) {
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'}); 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
    // Chrome allows the link to be clicked
    // without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else {
    // Firefox requires the link to be added to the DOM
    // before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    }
    
    downloadLink.click();
}

function f32(){

  document.getElementById("textarea1").value += '<plu:ReglementDU xmlns="http://www.w3.org/1999/xhtml" xmlns:plu="https://cnig.gouv.fr/reglementDU" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="https://cnig.gouv.fr/reglementDUhttps://raw.githubusercontent.com/cnigfr/structuration-reglement-urbanisme/master/schemas/reglementDU.xsd" id="15079_reglement20190128" nom="Règlement du PLU Jaleyrac" typeDoc="PLU" lien="https://www.geoportail-urbanisme.gouv.fr/document/by-id/cd22628fc5f7f6f8fa21ea49ceb4cc8d" idUrba="15079_PLU_20190128">\n';

}

function f33(){

  document.getElementById("textarea1").value += '</plu:ReglementDU>';

}

function f34(){

  document.getElementById("textarea1").value += '			<div>Titre_du_tableau</div>\n			<table rules="all" style="border:solid 1px black;">\n				<tr>\n					<td>\n						<div>Remplissage_du_tableau</div>\n						<div>Remplissage_du_tableau</div>\n					</td>\n';

}

function f35(){

  document.getElementById("textarea1").value += '				<div>Titre_du_tableau</div>\n				<table rules="all" style="border:solid 1px black;">\n					<tr>\n						<td>\n							<div>Remplissage_du_tableau</div>\n							<div>Remplissage_du_tableau</div>\n						</td>\n';

}

function f36(){

  document.getElementById("textarea1").value += '					<div>Titre_du_tableau</div>\n					<table rules="all" style="border:solid 1px black;">\n						<tr>\n							<td>\n								<div>Remplissage_du_tableau</div>\n								<div>Remplissage_du_tableau</div>\n							</td>\n';

}

function f37(){

  document.getElementById("textarea1").value += '						<div>Titre_du_tableau</div>\n						<table rules="all" style="border:solid 1px black;">\n							<tr>\n								<td>\n									<div>Remplissage_du_tableau</div>\n									<div>Remplissage_du_tableau</div>\n								</td>\n';

}

function f38(){

  document.getElementById("textarea1").value += '							<div>Titre_du_tableau</div>\n							<table rules="all" style="border:solid 1px black;">\n								<tr>\n									<td>\n										<div>Remplissage_du_tableau</div>\n										<div>Remplissage_du_tableau</div>\n									</td>\n';

}

function f39(){

  document.getElementById("textarea1").value += '				<tr>\n					<td>\n						<div>Remplissage_du_tableau</div>\n						<div>Remplissage_du_tableau</div>\n					</td>\n';

}

function f40(){

  document.getElementById("textarea1").value += '					<tr>\n						<td>\n							<div>Remplissage_du_tableau</div>\n							<div>Remplissage_du_tableau</div>\n						</td>\n';

}

function f41(){

  document.getElementById("textarea1").value += '						<tr>\n							<td>\n								<div>Remplissage_du_tableau</div>\n								<div>Remplissage_du_tableau</div>\n							</td>\n';

}

function f42(){

  document.getElementById("textarea1").value += '							<tr>\n								<td>\n									<div>Remplissage_du_tableau</div>\n									<div>Remplissage_du_tableau</div>\n								</td>\n';

}

function f43(){

  document.getElementById("textarea1").value += '								<tr>\n									<td>\n										<div>Remplissage_du_tableau</div>\n										<div>Remplissage_du_tableau</div>\n									</td>\n';

}

function f44(){

  document.getElementById("textarea1").value += '			</table>\n';

}

function f45(){

  document.getElementById("textarea1").value += '				</table>\n';

}

function f46(){

  document.getElementById("textarea1").value += '					</table>\n';

}

function f47(){

  document.getElementById("textarea1").value += '						</table>\n';

}

function f48(){

  document.getElementById("textarea1").value += '							</table>\n';

}

function f49(){

  document.getElementById("textarea1").value += '					<td>\n						<div>Remplissage_du_tableau</div>\n						<div>Remplissage_du_tableau</div>\n					</td>\n';

}

function f50(){

  document.getElementById("textarea1").value += '						<td>\n							<div>Remplissage_du_tableau</div>\n							<div>Remplissage_du_tableau</div>\n						</td>\n';

}

function f51(){

  document.getElementById("textarea1").value += '							<td>\n								<div>Remplissage_du_tableau</div>\n								<div>Remplissage_du_tableau</div>\n							</td>\n';

}

function f52(){

  document.getElementById("textarea1").value += '								<td>\n									<div>Remplissage_du_tableau</div>\n									<div>Remplissage_du_tableau</div>\n								</td>\n';

}

function f53(){

  document.getElementById("textarea1").value += '									<td>\n										<div>Remplissage_du_tableau</div>\n										<div>Remplissage_du_tableau</div>\n									</td>\n';

}

function f54(){

  document.getElementById("textarea1").value += '				</tr>\n';

}

function f55(){

  document.getElementById("textarea1").value += '					</tr>\n';

}

function f56(){

  document.getElementById("textarea1").value += '						</tr>\n';

}

function f57(){

  document.getElementById("textarea1").value += '							</tr>\n';

}

function f58(){

  document.getElementById("textarea1").value += '								</tr>\n';

}

function f59(){

  document.getElementById("textarea1").value += '<div><strong>Insérez_le_contenu_ici</strong></div>\n';

}

function f60(){

  document.getElementById("textarea1").value += '<div><i>Insérez_le_contenu_ici</i></div>\n';

}

function f61(){

  document.getElementById("textarea1").value += '<div><span style="text-decoration:underline">Insérez_le_contenu_ici</span></div>\n';

}

function f62(){

  document.getElementById("textarea1").value += '<div><i><span style="text-decoration:underline">Insérez_le_contenu_ici</span></i></div>\n';

}

function f63(){

  document.getElementById("textarea1").value += '<div><i><strong>Insérez_le_contenu_ici</strong></i></div>\n';

}

function f64(){

  document.getElementById("textarea1").value += '<div><span style="text-decoration:underline"><strong>Insérez_le_contenu_ici</strong></span></div>\n';

}

function f65(){

  document.getElementById("textarea1").value += '<div>\n	<a href="Votre_lien_internet_ici">Titre_du_lien</a>\n</div>\n';

}