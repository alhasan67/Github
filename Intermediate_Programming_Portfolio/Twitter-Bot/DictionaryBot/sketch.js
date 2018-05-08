// This will be our software
// Using the Twit node package
// https://github.com/ttezel/twit
var Twit = require('twit');

// Pulling all my twitter account info from another file
var config = require('./config.js');

// Making a Twit object for connection to the API
var T = new Twit(config);

// Start once
tweeter();

// Once every N milliseconds
setInterval(tweeter, 60*50*1000);

// Here is the bot!
function tweeter() {

  // This is a random number bot
//program code should go here
//
word1 = {"DIPLOBLASTIC":"Characterizing the ovum when it has two primary
germinallayers.","DEFIGURE":"To delineate. [Obs.]These two stones as
they are here defigured. Weever.","LOMBARD":"Of or pertaining to
Lombardy, or the inhabitants of Lombardy.","BAHAISM":"The religious
tenets or practices of the Bahais.","FUMERELL":"See
Femerell.","ROYALET":"A petty or powerless king. [R.]there were at this
time two other royalets, as only kings by hisleave.
Fuller.","TROPHIED":"Adorned with trophies.The trophied arches, storied
halls, invade. Pope.","ZEQUIN":"See Sequin.","MILLWRIGHT":"A mechanic
whose occupation is to build mills, or to set uptheir
machinery.","PHOTOGRAPHOMETER":"An instrument for determining the
sensibility of the platesemployed in photographic processes to luminous
rays.","SCHEELIUM":"The metal tungsten. [Obs.]","ALVEOLATE":"Deeply
pitted, like a honeycomb.","LIMULUS":"The only existing genus of
Merostomata. It includes only a fewspecies from the East Indies, and one
(Limulus polyphemus) from theAtlantic coast of North America. Called
also Molucca crab, king crab,horseshoe crab, and horsefoot.","OSMUND":"A
fern of the genus Osmunda, or flowering fern. The mostremarkable species
is the osmund royal, or royal fern (Osmundaregalis), which grows in wet
or boggy places, and has large bipinnatefronds, often with a panicle of
capsules at the top. The rootstockcontains much starch, and has been
used in stiffening linen.","POTTEEN":"See Poteen.","UNDERRUN":"To run or
pass under; especially (Naut.), to pass along andunder, as a cable, for
the purpose of taking it in, or of examiningit.","EMPLASTIC":"Fit to be
applied as a plaster; glutinous; adhesive; as,emplastic
applications.","RHYTHMICS":"The department of musical science which
treats of the length ofsounds.","PLEUROPTERA":"A group of Isectivora,
including the colugo.","UNBLOODY":"Not bloody. Dryden. Unbloody
sacrifice. (a) A sacrifice inwhich no victim is slain. (b) (R. C. Ch.)
The Mass.","CINCINNUS":"A form of monochasium in which the lateral
branches arisealternately on opposite sides of the false axis; -- called
alsoscorpioid cyme. --Cin*cin\"nal (#), a.","INDOCILITY":"The quality or
state of being indocile; dullness of intellect;unteachableness;
intractableness.The stiffness and indocility of the Pharisees. W.
Montagu.","TELEOCEPHIAL":"An extensive order of bony fishes including
most of the commonmarket species, as bass, salmon, cod, perch,
etc.","CANEBRAKE":"A thicket of canes. Ellicott.","QUININIC":"Pertaining
to, or designating, a nitrogenous acid obtained as ayellow crystalline
substance by the oxidation of quinine.","RICINIC":"Pertaining to, or
derived from, castor oil; formerly,designating an acid now called
ricinoleic acid.","TELLURAL":"Of or pertaining to the earth.
[R.]","OTHERNESS":"The quality or state of being other or different;
alterity;oppositeness.","FASCICLE":"A small bundle or collection; a
compact cluster; as, a fascicleof fibers; a fascicle of flowers or
roots.","REENJOYMENT":"Renewed enjoiment.","LONGIROSTER":"One of the
Longirostres.","RHAPSODIZE":"To utter as a rhapsody, or in the manner of
a rhapsody Sterne.","WATER VIOLET":"See under
Violet.","TRUNCHEONED":"Having a truncheon.","UNDERWENT":"imp. of
Undergo.","APITPAT":"With quick beating or palpitation; pitapat.
Congreve.","BRISKET":"That part of the breast of an animal which extends
from thefore legs back beneath the ribs; also applied to the fore part
of ahorse, from the shoulders to the bottom of the
chest.","KEPHALIN":"One of a group of nitrogenous phosphorized
principles, supposedby Thudichum to exist in brain
tissue.","METELY":"According to measure or proportion;
proportionable;proportionate. [Obs.]","JOHNSON GRASS":"A tall perennial
grass (Sorghum Halepense), valuable in theSouthern and Western States
for pasture and hay. The rootstocks arelarge and juicy and are eagerly
sought by swine. Called also Cubagrass, Means grass, Evergreen millet,
and Arabian millet.","MOP":"A made-up face; a grimace. \"What mops and
mowes it makes!\"Beau. & Fl.","SYMPOSIAC":"Of or pertaining to
compotations and merrymaking; happeningwhere company is drinking
together; as, symposiac meetings.Symposiac disputations amongst my
acquaintance. Arbuthnot.","ULVA":"A genus of thin papery bright green
seaweeds including thekinds called sea lettuce.","-ANA":"A suffix to
names of persons or places, used to denote acollection of notable
sayings, literary gossip, anecdotes, etc. Thus,Scaligerana is a book
containing the sayings of Scaliger, Johnsonianaof Johnson,
etc.","PHARISEAN":"Following the practice of Pharisees; Pharisaic.
[Obs.]\"Pharisean disciples.\" Milton.","PUTRIDNESS":"Putridity.
Floyer.","TOUSEL":"Same as Tousle. [Colloq.]","TETRAGON":"A plane figure
having four sides and angles; a quadrangle, as asquare, a rhombus,
etc.","HARELD":"The long-tailed duck. See Old Squaw.","PYCNOSTYLE":"See
under Intercolumniation. -n.","BOLE":"The trunk or stem of a tree, or
that which is like it.Enormous elm-tree boles did stoop and lean.
Tennyson.","BASISOLUTE":"Prolonged at the base, as certain
leaves.","HISTORIOGRAPHY":"The art of employment of an
historiographer.","CURSORILY":"In a running or hasty manner;
carelessly.","GLOSSARIST":"A writer of glosses or of a glossary; a
commentator; ascholiast. Tyrwhitt.","APOTACTITE":"One of a sect of
ancient Christians, who, in supposed imitationof the first believers,
renounced all their possessions.","FRITHY":"Woody. [Obs.]
Skelton.","ZECHIN":"See Sequin.","BESTAR":"To sprinkle with, or as with,
stars; to decorate with, or aswith, stars; to bestud. \"Bestarred with
anemones.\" W. Black.","CARICATURIST":"One who
caricatures."}

word2 = {"DEKLE":"See Deckle.","PATENTEE":"One to whom a grant is made,
or a privilege secured, by patent.Bacon.","MYSELVEN":"Myself.
[Obs.]","PIEWIPE":"The lapwing, or pewit. [Prov. Eng.]","PUTRIDITY":"The
quality of being putrid; putrefaction;
rottenness.","STEEPLECHASING":"The act of riding steeple
chases.","ACTUALNESS":"Quality of being actual;
actuality.","WISHLY":"According to desire; longingly; with wishes. [Obs.
or Prov.Eng.] Chapman.","DAMPNESS":"Moderate humidity; moisture;
fogginess; moistness.","PINHOLD":"A place where a pin is
fixed.","SECTILITY":"The state or quality of being
sectile.","ATTENDER":"One who, or that which, attends.","ABOON":"and
adv. Above. [Scot. & Prov. Eng.]Aboon the pass of Bally-Brough. Sir W.
Scott.The ceiling fair that rose aboon. J. R. Drake.","FORESEIZE":"To
seize beforehand.","HOOFED":"Furnished with hoofs.
Grew.","EMPERORSHIP":"The rank or office of an
emperor.","PATHETISM":"See Mesmerism. L. Sunderland.","LACERTILIA":"An
order of Reptilia, which includes the
lizards.","REDARGUTORY":"Pertaining to, or containing, redargution;
refutatory. [R.]","VOLCANIC NECK":"A column of igneous rock formed by
congelation of lava in theconduit of a volcano and later exposed by the
removal of surroundingrocks.","ASCLEPIADACEOUS":"Of, pertaining to, or
resembling, plants of the Milkweedfamily.","BASYLE":"A positive or
nonacid constituent of compound, eitherelementary, or, if compound,
performing the functions of an element.","GASPEREAU":"The alewife.
[Local, Canada]","BLENCH HOLDING":"See Blanch holding.","INDUCTION
MOTOR":"A type of alternating-current motor comprising two woundmembers,
one stationary, called the stator, and the other rotating,called the
rotor, these two members corresponding to a certain extentto the field
and armature of a direct-current motor.","MULLINGONG":"See Duck mole,
under Duck. [Written also mollingong.]"}

var tweet = "First of the day is "+word1[Math.floor((Math.random() *
word1.length))]+" The second word is "+word2[Math.floor((Math.random() *
word2.length))];
  //var tweet = 'Here\'s a random number between 0 and 100: ' +
  //Math.floor(Math.random()*100);
  //
  //
  //
  // Post that tweet!
  T.post('statuses/update', { status: tweet }, tweeted);

  // Callback for when the tweet is sent
  function tweeted(err, data, response) { if (err) { console.log(err);
    } else {
      console.log('Success: ' + data.text);
      //console.log(response);
      //    }
  };
  }
}
