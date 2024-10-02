import { CST } from "../CST";

export class game_scene extends Phaser.Scene{
    
    constructor(){
        super({
            key: CST.SCENES.GAMES
        })
    }

    

init(data){
    this.slot_no = data.slot_no;
    this.slot_cur = data.slot_cur;
    this.load_true = data.load_true;
}
    
preload(){
    this.data.set('val1', 0);
    this.data.set('val2', 0);
    this.data.set('val3', 0);
    this.data.set('val4', 0);
    this.data.set('val5', 0);
    this.data.set('val6', 0);
    this.data.set('val7', 0);
    this.data.set('val8', 0);
    this.data.set('val9', 0);
    this.data.set('val10', 0);
    // Ojo Casilla
    this.data.set('val11', 0);
    // Ojo 1
    this.data.set('val11_1', 0);
    // Ojo 2
    this.data.set('val11_2', 0);
    this.data.set('val12', 0);
    this.data.set('val13', 0);
    // Skin Colors
    this.data.set('val14', 0);

    // Layers Extras
    this.data.set('val15', 0);
    this.data.set('val16', 0);

    // Ear Slot
    this.data.set('val17', 0);

    this.data.set('dress1', 0);
    this.data.set('dress2', 0);
    this.data.set('dress3', 0);

    this.data.set('top1', 0);
    this.data.set('top2', 0);
    this.data.set('top3', 0);
    this.data.set('top4', 0);
    this.data.set('top5', 0);
    this.data.set('top6', 0);
    this.data.set('top7', 0);
    this.data.set('top8', 0);
    this.data.set('top9', 0);
    this.data.set('top10', 0);
    this.data.set('top11', 0);
    this.data.set('top12', 0);
    this.data.set('top13', 0);
    this.data.set('top14', 0);
    this.data.set('top15', 0);
    this.data.set('top16', 0);
    this.data.set('top17', 0);
    this.data.set('top18', 0);
    this.data.set('top19', 0);
    this.data.set('top20', 0);
    this.data.set('top21', 0);
    this.data.set('top22', 0);
    this.data.set('top23', 0);
    this.data.set('top24', 0);
    this.data.set('top25', 0);
    this.data.set('top26', 0);
    this.data.set('top27', 0);

    this.data.set('hair1', 0);
    this.data.set('hair2', 0);
    this.data.set('hair3', 0);
    this.data.set('hair4', 0);
    this.data.set('hair5', 0);
    this.data.set('hair6', 0);
    this.data.set('hair7', 0);
    this.data.set('hair8', 0);
    this.data.set('hair9', 0);
    this.data.set('hair10', 0);

    this.data.set('backhair1', 0);
    this.data.set('backhair2', 0);
    this.data.set('backhair3', 0);  
    this.data.set('backhair4', 0);  
    this.data.set('backhair5', 0);   
    this.data.set('backhair6', 0); 
    this.data.set('backhair7', 0);

    this.data.set('shirt1', 0); 
    this.data.set('shirt2', 0); 
    this.data.set('shirt3', 0); 
    this.data.set('shirt4', 0); 

    // Variaciones de Color para la Camisa
    this.data.set('shirt_var1', 0);
    this.data.set('shirt_var2', 0);
    this.data.set('shirt_var3', 0);
    this.data.set('shirt_var4', 0);

    this.data.set('pants1', 0); 
    this.data.set('pants2', 0); 
    this.data.set('pants3', 0); 
    this.data.set('pants4', 0);

    // Variaciones de Color para los Pantalones
    this.data.set('pants_var1', 0);
    this.data.set('pants_var2', 0);
    this.data.set('pants_var3', 0);
    this.data.set('pants_var4', 0);

    this.data.set('skirt1', 0); 
    this.data.set('skirt2', 0); 
    this.data.set('skirt3', 0); 

    // Variaciones de Color para las Skirts
    this.data.set('skirt_var1', 0);
    this.data.set('skirt_var2', 0);
    this.data.set('skirt_var3', 0);
    
    this.data.set('acc1_1', 0); 

    this.data.set('acc2_1', 0); 
    this.data.set('acc2_2', 0); 
    this.data.set('acc2_3', 0); 

    // Variaciones de Color para los ACC2
    this.data.set('acc2_var1', 0);
    this.data.set('acc2_var2', 0);
    this.data.set('acc2_var3', 0);

    this.data.set('acc3_1', 0); 
    this.data.set('acc3_2', 0); 
    this.data.set('acc3_3', 0); 

    this.data.set('eye1_1', 0); 
    this.data.set('eye1_2', 0); 
    this.data.set('eye1_3', 0); 
    this.data.set('eye1_4', 0); 
    this.data.set('eye1_5', 0); 
    this.data.set('eye1_6', 0); 

    this.data.set('eyebrow_1', 0); 
    this.data.set('eyebrow_2', 0); 
    this.data.set('eyebrow_3', 0); 
    this.data.set('eyebrow_4', 0);
    this.data.set('eyebrow_5', 0);
    this.data.set('eyebrow_6', 0);
    this.data.set('eyebrow_7', 0);
    this.data.set('eyebrow_8', 0);
    this.data.set('eyebrow_9', 0);
    this.data.set('eyebrow_10', 0);
    this.data.set('eyebrow_11', 0);


    this.data.set('nose_1', 0); 
    this.data.set('nose_2', 0);
    this.data.set('nose_3', 0); 
    this.data.set('nose_4', 0);
    this.data.set('nose_5', 0);
    this.data.set('nose_6', 0);
    this.data.set('nose_7', 0);
    this.data.set('nose_8', 0);
    this.data.set('nose_9', 0);
    this.data.set('nose_10', 0);
    this.data.set('nose_11', 0);


    this.data.set('mouth_1', 0); 
    this.data.set('mouth_2', 0); 
    this.data.set('mouth_3', 0); 
    this.data.set('mouth_4', 0); 
    this.data.set('mouth_5', 0); 
    this.data.set('mouth_6', 0); 
    this.data.set('mouth_7', 0); 
    this.data.set('mouth_8', 0); 
    this.data.set('mouth_9', 0); 
    this.data.set('mouth_10', 0); 
    this.data.set('mouth_11', 0); 

    this.data.set('ear_1', 0); 
    this.data.set('ear_2', 0); 

    this.data.set('background_1',0);
    this.data.set('background_2',0);
    this.data.set('background_3',0);

    // Shirt Depht Flag
    this.data.set('shirt_flag' + this.slot_cur, localStorage.getItem('shirt_flag' + this.slot_cur));
}



create(data){

    this.music = data.music;

    // Flags
    // Flag 1 => Cuantas movidas hacia la derecha puede hacerse al scroll de seleccion de ropas
    let flag1 = 6;
    // Flag 2 => Abrir / Cerrar los tonos de piel
    let flag2 = 0;

    let flag4 = 0;

    let last_shirt1 = Number(Math.max(localStorage.getItem('shirt_var1_' + this.slot_cur),0) -1);
    let last_shirt2 = Number(Math.max(localStorage.getItem('shirt_var2_' + this.slot_cur),0) -1); 
    let last_shirt3 = Number(Math.max(localStorage.getItem('shirt_var3_' + this.slot_cur),0) -1); 
    let last_shirt4 = Number(Math.max(localStorage.getItem('shirt_var4_' + this.slot_cur),0) -1); 

    let last_pants1 = Number(Math.max(localStorage.getItem('pants_var1_' + this.slot_cur),0) -1);
    let last_pants2 = Number(Math.max(localStorage.getItem('pants_var2_' + this.slot_cur),0) -1); 
    let last_pants3 = Number(Math.max(localStorage.getItem('pants_var3_' + this.slot_cur),0) -1); 
    let last_pants4 = Number(Math.max(localStorage.getItem('pants_var4_' + this.slot_cur),0) -1); 

    let last_skirt1 = Number(Math.max(localStorage.getItem('pants_var1_' + this.slot_cur),0) -1);
    let last_skirt2 = Number(Math.max(localStorage.getItem('pants_var2_' + this.slot_cur),0) -1); 
    let last_skirt3 = Number(Math.max(localStorage.getItem('pants_var3_' + this.slot_cur),0) -1); 

    let last_acc2_1 = Number(Math.max(localStorage.getItem('acc2_var1_' + this.slot_cur),0) -1);
    let last_acc2_2 = Number(Math.max(localStorage.getItem('acc2_var2_' + this.slot_cur),0) -1);
    let last_acc2_3 = Number(Math.max(localStorage.getItem('acc2_var3_' + this.slot_cur),0) -1);

    let layer16_qty = 0;
    let layer16_limit = 0;
    let layer16_y_cap = 0;

    // Camera
    const cameraWidth = this.cameras.main.width
    const cameraHeight = this.cameras.main.height

    // Background
    let bg = this.add.image(-1400,-1400,"bg_menu").setOrigin(0);
    bg.setScale(Math.max(cameraWidth / bg.width, cameraHeight / bg.height))

    // Main Doll Sprite
    // let doll = this.add.image(0, 0, "main_doll").setDepth(2)
    if (this.anims.exists('dollskin')) {

    }else{
    let dollskins = this.anims.create({
        key: "dollskin",
        frameRate: 17,
        frames: this.anims.generateFrameNames("dollskin",{
            scale: 1,
            prefix: "doll_skin",
            start: 1,
            end:17,
        }),
    });
}

    let doll = Phaser.GameObjects.Sprite = this.add.sprite(0, 0,"dollskin",'doll_skin1');
    doll.setDepth(2);
    doll.play("dollskin");
    doll.anims.pause();
    // doll.setScale(0.9);
    doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[0]);

    // CLICK FX

    if (this.anims.exists('efx2')) {

    }else{
    let particle2 = this.anims.create({
        key:"efx2",
        frameRate:22,
        frames: this.anims.generateFrameNames("efx2",{
           scale: 3.5,
           prefix: "click_fx",
           start: 1,
           end: 5,
        })
    })
}


    this.input.on('pointerdown',(pointer)=>{
    let clickfx = Phaser.GameObjects.Sprite = this.add.sprite(pointer.x, pointer.y,"efx2",'click_fx1');
    clickfx.play("efx2");
    clickfx.setScale(3.5);
    clickfx.setDepth(99);
    clickfx.setAlpha(0.5);
    clickfx.on('animationcomplete',()=>{
    clickfx.destroy();
    })
    })

    if (this.anims.exists('transfx1')){

    }else{
    let trans1 = this.anims.create({
        key:"transfx1",
        frameRate:32,
        frames: this.anims.generateFrameNames("transfx1",{
           scale: 2,
           prefix: "trans1_f",
           start: 1,
           end: 6,
           repeat: -1,
        })
    })
}

    let trans_efx1 = Phaser.GameObjects.Sprite = this.add.sprite(this.game.renderer.width / 2, this.game.renderer.height / 2,"transfx1",'trans1_f1');
    trans_efx1.playReverse("transfx1");
    trans_efx1.setScale(2);
    trans_efx1.setDepth(99);
    trans_efx1.on('animationcomplete',()=>{
        trans_efx1.destroy();
    })

    // SFX
    let tap1 = this.sound.add('tap1');
    let tap2 = this.sound.add('tap2');
    let tap3 = this.sound.add('tap3');
    let tap3_2 = this.sound.add('tap3_2');
    let tap4 = this.sound.add('tap4');
    let metal = this.sound.add('metal');
    let takepic = this.sound.add('takepic');

    let soundsfx = [tap1, tap2, tap3, tap3_2, tap4, metal, takepic];

    soundsfx.forEach(sound => {
        sound.volume = localStorage.getItem('sfx_volume'); 
    });

    let backdrop = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.84, "backdrop_1");
    backdrop.setDepth(2);

    let backdrop_front = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.73, "backdrop_1_front");
    backdrop_front.setDepth(17);

    let color_panel = this.add.image(24, this.game.renderer.height * 0.765, "color_panel").setOrigin(0);
    color_panel.setDepth(18);

    let del_clothes = this.add.image(0, -500, "del_clothes");
    del_clothes.setDepth(31);
    del_clothes.setOrigin(0);


    // Iconos Derecha
    this.menu = this.add.image(this.game.renderer.width, this.game.renderer.height * 0.05, "menu").setDepth(5).setScale(1.4).setOrigin(0.5);
    this.menu.setInteractive();
    this.menu.on('pointerdown',function(){

    up_arrow.x = this.game.renderer.width * 1.50;
    down_arrow.x = this.game.renderer.width * 1.50;

    if (flag2 === 1){
    tap3_2.play();
    this.skins.destroy(true, true);
    flag2= 0;
    }

    flag4 = 1;

    let width = this.sys.game.config.width;
    let height = this.sys.game.config.height;

    let menurectangle = this.add.rectangle(width / 2, height / 2, width, height, 0x000000);
    menurectangle.setAlpha(0.2);
    menurectangle.setDepth(19);
    menurectangle.setInteractive();

    let backdrop_menu = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2.2, 'backdrop_menu').setDepth(20);
    

    // Music Setting
    let music_mix = this.add.image(this.game.renderer.width * 0.23, this.game.renderer.height * 0.23, 'sound').setDepth(20).setScale(1.2);

    // Bar Rectangle
    let barBackground = this.add.rectangle(music_mix.x + music_mix.width * 1.3, music_mix.y, 320, 40, 0xffffff).setDepth(20).setOrigin(0, 0.5);

    // Text Percentage
    let text = this.add.text(barBackground.x + barBackground.width * 0.85, barBackground.y + barBackground.height * 0.8, (Math.round(localStorage.getItem('music_volume') * 100) + '%'), { fontSize: '42px', fill: '#ffffff' }).setDepth(20).setOrigin(0.5, 0);

    // Bar Filler
    let barFill = this.add.rectangle(barBackground.x, barBackground.y, 1, barBackground.height, 0xffff00).setDepth(20);

    // Set the origin to the left edge
    barFill.setOrigin(0, 0.5);

    // Create an interactive area over the sound bar
    let barArea = this.add.zone(barBackground.x -12, barBackground.y - barBackground.height / 2, barBackground.width + 34, barBackground.height).setDepth(21).setOrigin(0);

    barArea.setInteractive();

    
    barFill.width = localStorage.getItem('music_volume') * barBackground.width;
    // Change the width of the fill rectangle when the pointer is down
    barArea.on('pointermove', function (pointer) {
    if (pointer.isDown) {
        let value = Phaser.Math.Clamp((pointer.x - barBackground.x) / barBackground.width, 0, 1);
        barFill.width = value * barBackground.width;
        // Here you can update the volume of your game
        this.music = data.music;
        this.music.volume = value;
        localStorage.setItem('music_volume', value);
        text.setText(Math.round(value * 100) + '%')
    }
}, this);

    // Set the volume for all sounds
    soundsfx.forEach(sound => {
    this.soundffx = sound.volume;
    });

  // SFX Setting
  let sfx_mix = this.add.image(this.game.renderer.width * 0.23, this.game.renderer.height * 0.32, 'sound').setDepth(20).setScale(1.2);

  // Bar Rectangle
  let barBackground2 = this.add.rectangle(sfx_mix.x + sfx_mix.width * 1.3, sfx_mix.y, 320, 40, 0xffffff).setDepth(20).setOrigin(0, 0.5);

  // Text Percentage
  let text2 = this.add.text(barBackground2.x + barBackground2.width * 0.85, barBackground2.y + barBackground2.height * 0.8, Math.round(localStorage.getItem('sfx_volume') * 100) + '%', { fontSize: '42px', fill: '#ffffff' }).setDepth(20).setOrigin(0.5, 0);

  // Bar Filler
  let barFill2 = this.add.rectangle(barBackground2.x, barBackground2.y, 1, barBackground2.height, 0xffff00).setDepth(20);

  // Set the origin to the left edge
  barFill2.setOrigin(0, 0.5);

  // Create an interactive area over the sound bar
  let barArea2 = this.add.zone(barBackground2.x -12, barBackground2.y - barBackground2.height / 2, barBackground2.width + 34, barBackground2.height).setDepth(21).setOrigin(0);

  barArea2.setInteractive();

  barFill2.width = localStorage.getItem('sfx_volume') * barBackground2.width;
  

  barArea2.on('pointermove', function (pointer) {
  if (pointer.isDown) {
      let value2 = Phaser.Math.Clamp((pointer.x - barBackground2.x) / barBackground2.width, 0, 1);
      barFill2.width = value2 * barBackground2.width;

      localStorage.setItem('sfx_volume', value2);
      // Set the volume for all sounds
      soundsfx.forEach(sound => {
      sound.volume = value2; 
      });

      text2.setText(Math.round(value2 * 100) + '%')
  }

}, this);
    
    // Full Screen
    let option1 = this.add.rectangle(this.game.renderer.width / 5.2, this.game.renderer.height * 0.41, 448, 50, 0xFFFFFF,0).setDepth(23).setOrigin(0);
    // Take Picture
    let option2 = this.add.rectangle(this.game.renderer.width / 5.2, this.game.renderer.height * 0.48, 448, 50, 0xFFFFFF,0).setDepth(23).setOrigin(0);
    // Save
    let option3 = this.add.rectangle(this.game.renderer.width / 5.2, this.game.renderer.height * 0.55, 448, 50, 0xFFFFFF,0).setDepth(23).setOrigin(0);
    // Load
    let option4 = this.add.rectangle(this.game.renderer.width / 5.2, this.game.renderer.height * 0.62, 448, 50, 0xFFFFFF,0).setDepth(23).setOrigin(0);
    // Quit Game
    let option5 = this.add.rectangle(this.game.renderer.width / 5.2, this.game.renderer.height * 0.69, 448, 50, 0xFFFFFF,0).setDepth(23).setOrigin(0);


    let option1_text = this.add.text(option1.x + 90, option1.y, 'Full Screen', { fontSize: '46px', color: '#ffffff' }).setDepth(22);
    let option2_text = this.add.text(option2.x + 90, option2.y, 'Take Picture', { fontSize: '46px', color: '#ffffff' }).setDepth(22);
    let option3_text = this.add.text(option3.x + 90, option3.y, 'Save', { fontSize: '46px', color: '#ffffff' }).setDepth(22);
    let option4_text = this.add.text(option4.x + 90, option4.y, 'Load', { fontSize: '46px', color: '#ffffff' }).setDepth(22);
    let option5_text = this.add.text(option5.x + 90, option5.y, 'Quit Game', { fontSize: '46px', color: '#ffffff' }).setDepth(22);

    let option1_img = this.add.image(this.game.renderer.width * 0.23, this.game.renderer.height * 0.43,"fullscreen").setDepth(22);
    let option2_img = this.add.image(this.game.renderer.width * 0.23, this.game.renderer.height * 0.50,"camera").setDepth(22);
    let option3_img = this.add.image(this.game.renderer.width * 0.23, this.game.renderer.height * 0.57,"save").setDepth(22);
    let option4_img = this.add.image(this.game.renderer.width * 0.23, this.game.renderer.height * 0.64,"loadreturn").setDepth(22);
    let option5_img = this.add.image(this.game.renderer.width * 0.23, this.game.renderer.height * 0.71,"quitgamebtn").setDepth(22);

    // let setfullscreen = this.add.text(this.game.renderer.width / 2, this.game.renderer.height * 0.43, 'Full Screen', { fontSize: '48px', fill: '#ffffff' }).setDepth(20).setOrigin(0.5, 0);
    option1.setInteractive();
    option1.on('pointerdown',()=>{

    this.init_y = frameout.y;

    this.tween_derecha_back.play();
    this.tween_izquierda_back.play();
    this.tween_down_back.play();
    quithandler();
    this.flag3 = 1;
    this.time.delayedCall(600, ()=>{

    this.input.on('pointerdown', function(){
    if(this.flag3 === 1){
    this.tween_derecha.play();
    this.tween_izquierda.play();
    // this.tween_down_backdrop.play();
    this.tween_down_colorpanel.play();
    this.tween_down_layer15.play();
    this.tween_down_layer16.play();
    this.tween_down_layer20.play();
    this.tween_down_frameout.play();
    this.flag3 = 0;

    up_arrow.x = this.game.renderer.width * 0.90;
    down_arrow.x = this.game.renderer.width * 0.90;
    }
},this);
    })
    })

    // Camera Function
    option2.setInteractive();
    option2.on('pointerdown', function camera(){

    this.init_y = frameout.y;
    

    this.tween_derecha_back.play();
    this.tween_izquierda_back.play();
    this.tween_down_back.play();
    
    quithandler();

    this.time.delayedCall(600, ()=>{
    this.takepic_btn = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.85 , "takepic").setDepth(20).setScale(1.2).setOrigin(0.5);
    this.return_btn = this.add.image(this.game.renderer.width * 0.1, this.game.renderer.height * 0.72 , "return").setDepth(20).setOrigin(0.5);
        
    
    this.return_btn.setInteractive();
    this.return_btn.on('pointerdown', function(){
        
    this.tween_derecha.play();
    this.tween_izquierda.play();
    // this.tween_down_backdrop.play();
    this.tween_down_colorpanel.play();
    this.tween_down_layer15.play();
    this.tween_down_layer16.play();
    this.tween_down_layer20.play();
    this.tween_down_frameout.play();
    this.return_btn.destroy();
    this.takepic_btn.destroy();

    up_arrow.x = this.game.renderer.width * 0.90;
    down_arrow.x = this.game.renderer.width * 0.90;

},this);

    
    let rect = this.add.rectangle(this.game.renderer.width, this.game.renderer.height, this.game.renderer.width, this.game.renderer.height, 0xffffff).setOrigin(0).setDepth(20);
        
        
    this.rect_fade = this.tweens.add({
    targets: rect,
    alpha: 0,
    duration: 20,
    paused:true
            
    });
    
       
        this.takepic_btn.setInteractive();
        this.takepic_btn.on('pointerdown', function(){
        rect.x = 0;
        rect.y = 0;
        takepic.play();
        this.rect_fade.play();
        this.takepic_btn.destroy();
        this.return_btn.destroy();
        
    
        this.time.delayedCall(600, ()=>{
       
       
        this.return_btn = this.add.image(this.game.renderer.width * 0.1, this.game.renderer.height * 0.72 , "return").setDepth(20).setOrigin(0.5);
        this.return_btn.setInteractive();
        this.return_btn.on('pointerdown', function(){
    
        this.tween_derecha.play();
        this.tween_izquierda.play();
        // this.tween_down_backdrop.play();
        this.tween_down_colorpanel.play();
        this.tween_down_layer15.play();
        this.tween_down_layer16.play();
        this.tween_down_layer20.play();
        this.tween_down_frameout.play();
        this.download_img.destroy();
        this.return_btn.destroy();
        this.save_img.destroy();

        up_arrow.x = this.game.renderer.width * 0.90;
        down_arrow.x = this.game.renderer.width * 0.90;

        },this);
    
        this.save_img = this.add.image(this.game.renderer.width / 1.2, this.game.renderer.height * 0.90,'save_img_gray').setDepth(20).setScale(2).setOrigin(0.5);
        
        
        this.download_img = this.add.image(this.game.renderer.width / 1.2, this.game.renderer.height * 0.75,'download_img').setDepth(20).setScale(2).setOrigin(0.5);
        this.download_img.setInteractive();
        this.download_img.on('pointerdown',()=>{
    
        this.download_img.destroy();
        this.return_btn.destroy();
        this.save_img.destroy();

        let newWidth = 720;
        let newHeight = 870;

        this.sys.game.scale.setGameSize(newWidth, newHeight);
    
        this.time.delayedCall(300, ()=>{


        let screenshotDataUrl = this.sys.game.canvas.toDataURL();
    
        // Create a link element
        let link = document.createElement('a');
    
        // Set the link's href to the data URL of the screenshot
        link.href = screenshotDataUrl;
    
        // Set the download attribute of the link
        link.download = 'screenshot.png';
    
        // Trigger a click event on the link
        link.click();

        let oldWidth = 720;
        let oldHeight = 1280;

        this.sys.game.scale.setGameSize(oldWidth, oldHeight);
    
        this.save_img = this.add.image(this.game.renderer.width / 1.2, this.game.renderer.height * 0.90,'save_img_gray').setDepth(20).setScale(2).setOrigin(0.5);
        
        this.return_btn = this.add.image(this.game.renderer.width * 0.1, this.game.renderer.height * 0.1 , "return").setDepth(20).setScale(1.2).setOrigin(0.5);
        this.return_btn.setInteractive();
        this.return_btn.on('pointerdown', function(){
    
        this.tween_derecha.play();
        this.tween_izquierda.play();
        // this.tween_down_backdrop.play();
        this.tween_down_colorpanel.play();
        this.tween_down_layer15.play();
        this.tween_down_layer16.play();
        this.tween_down_layer20.play();
        this.download_img.destroy();
        this.return_btn.destroy();
        this.save_img.destroy();

        up_arrow.x = this.game.renderer.width * 0.90;
        down_arrow.x = this.game.renderer.width * 0.90;
        },this);
        })
        })
        })
        },this);
    })
    },this);
    
    // let save = this.add.text(this.game.renderer.width / 2, this.game.renderer.height * 0.55, 'Save', { fontSize: '48px', fill: '#ffffff' }).setDepth(20).setOrigin(0.5, 0);
    option3.setInteractive();
    option3.on('pointerdown',()=>{

        
    localStorage.setItem('slot', this.slot_no);

    this.edit_icon = document.getElementById('edit_qty');
    this.edit_icon.innerHTML = Number(Math.max(localStorage.getItem('slot'),0));

    // Current Position (Dress)
    // localStorage.setItem('dressxpos' + this.slot_cur, layer9.x.toString());
    // localStorage.setItem('dressypos' + this.slot_cur, layer9.y.toString());

    // localStorage.setItem('dressxmanh' + this.slot_cur, layer9.x - layer4.x.toString());
    // localStorage.setItem('dressymanh' + this.slot_cur, layer9.y - layer4.y.toString());



    // // Current Position (Shirt)
    // localStorage.setItem('shirtxpos' + this.slot_cur, layer9.x.toString());
    // localStorage.setItem('shirtypos' + this.slot_cur, layer9.y.toString());

    // localStorage.setItem('shirtxmanh' + this.slot_cur, layer9.x - layer4.x.toString());
    // localStorage.setItem('shirtymanh' + this.slot_cur, layer9.y - layer4.y.toString());


    // // Current Position (Skirt)
    // localStorage.setItem('skirtxpos' + this.slot_cur, layer6.x.toString());
    // localStorage.setItem('skirtypos' + this.slot_cur, layer6.y.toString());

    // localStorage.setItem('skirtxmanh' + this.slot_cur, layer6.x - layer4.x.toString());
    // localStorage.setItem('skirtymanh' + this.slot_cur, layer6.y - layer4.y.toString());


    // // Current Position (Pants)
    // localStorage.setItem('pantsxpos' + this.slot_cur, layer5.x.toString());
    // localStorage.setItem('pantsypos' + this.slot_cur, layer5.y.toString());

    // localStorage.setItem('pantsxmanh' + this.slot_cur, layer5.x - layer4.x.toString());
    // localStorage.setItem('pantsymanh' + this.slot_cur, layer5.y - layer4.y.toString());



    // Save Dress
    let dress_id = this.data.get('val1');
    localStorage.setItem('dress_id' + this.slot_cur, dress_id.toString());

    // Save Top
    let top_id = this.data.get('val2');
    localStorage.setItem('top_id' + this.slot_cur, top_id.toString());

    // Save Hair
    let hair_id = this.data.get('val3');
    localStorage.setItem('hair_id' + this.slot_cur,hair_id.toString());

    // Save BackHair
    let backhair_id = this.data.get('val4');
    localStorage.setItem('backhair_id' + this.slot_cur,backhair_id.toString());

    // Save Shirt
    let shirt_id = this.data.get('val5');
    localStorage.setItem('shirt_id' + this.slot_cur,shirt_id.toString());

    // Save Skirt
    let skirt_id = this.data.get('val6');
    localStorage.setItem('skirt_id' + this.slot_cur,skirt_id.toString());

    // Save Pants
    let pants_id = this.data.get('val7');
    localStorage.setItem('pants_id' + this.slot_cur,pants_id.toString());

    // Save Acc1
    let acc1_id = this.data.get('val8');
    localStorage.setItem('acc1_id' + this.slot_cur,acc1_id.toString());

    // Save Acc2
    let acc2_id = this.data.get('val9');
    localStorage.setItem('acc2_id' + this.slot_cur,acc2_id.toString());

    // Save Acc3
    let acc3_id = this.data.get('val10');
    localStorage.setItem('acc3_id' + this.slot_cur,acc3_id.toString());


    // Save Eye
    let eye_id = this.data.get('val11');
    localStorage.setItem('eye_id' + this.slot_cur,eye_id.toString());
    

    // ** Save Eye 1 Colors
    let eye1_id = this.data.get('val11_1');
    localStorage.setItem('eye1_id' + this.slot_cur,eye1_id.toString());

    // Save Eyebrows
    let eyebrow_id = this.data.get('val12');
    localStorage.setItem('eyebrow_id' + this.slot_cur,eyebrow_id.toString());

    // Save Background
    let background_id = this.data.get('val13');
    localStorage.setItem('background_id' + this.slot_cur,background_id.toString());

    // Save Skin Colors
    let skin_id = this.data.get('val14');
    localStorage.setItem('skin_id' + this.slot_cur, skin_id.toString());

    // Save Nose
    let nose_id = this.data.get('val15');
    localStorage.setItem('nose_id' + this.slot_cur,nose_id.toString());

    // Save Mouth
    let mouth_id = this.data.get('val16');
    localStorage.setItem('mouth_id' + this.slot_cur,mouth_id.toString());

    // Save Color Ear
    let ear_id = this.data.get('val17');
    localStorage.setItem('ear_id' + this.slot_cur,ear_id.toString());

    // Save Shirt Flag
    if(localStorage.getItem('shirt_flag' + this.slot_cur) == null){
        localStorage.setItem('shirt_flag' + this.slot_cur,0);
    }else{
        localStorage.setItem('shirt_flag' + this.slot_cur,this.data.get('shirt_flag' + this.slot_cur));
    }

    // Save Shirt Color Variations
    localStorage.setItem('shirt_var1_' + this.slot_cur, this.data.get('shirt_var1'));
    localStorage.setItem('shirt_var2_' + this.slot_cur, this.data.get('shirt_var2'));
    localStorage.setItem('shirt_var3_' + this.slot_cur, this.data.get('shirt_var3'));
    localStorage.setItem('shirt_var4_' + this.slot_cur, this.data.get('shirt_var4'));


    // Save Pants Color Variations
    localStorage.setItem('pants_var1_' + this.slot_cur, this.data.get('pants_var1'));
    localStorage.setItem('pants_var2_' + this.slot_cur, this.data.get('pants_var2'));
    localStorage.setItem('pants_var3_' + this.slot_cur, this.data.get('pants_var3'));
    localStorage.setItem('pants_var4_' + this.slot_cur, this.data.get('pants_var4'));

    // Save Skirt
    localStorage.setItem('skirt_var1_' + this.slot_cur, this.data.get('skirt_var1'));
    localStorage.setItem('skirt_var2_' + this.slot_cur, this.data.get('skirt_var2'));
    localStorage.setItem('skirt_var3_' + this.slot_cur, this.data.get('skirt_var3'));

    // Save ACC 2
    localStorage.setItem('acc2_var1_' + this.slot_cur, this.data.get('acc2_var1'));
    localStorage.setItem('acc2_var2_' + this.slot_cur, this.data.get('acc2_var2'));
    localStorage.setItem('acc2_var3_' + this.slot_cur, this.data.get('acc2_var3'));


    // Se ha Guardado (Aviso)
    let save_txt = this.add.text(this.game.renderer.width / 2, this.game.renderer.height * 0.55, 'Guardado!', { fontSize: '64px', fill: '#00FF3B' });
    save_txt.setDepth(50);
    save_txt.setOrigin(0.5);

    this.tweens.add({
        targets: save_txt,
        alpha: 0,
        y: '-=50', 
        duration: 1000, 
        onComplete: () => {
            save_txt.destroy();
        }
    });

    })

    // let load = this.add.text(this.game.renderer.width / 2, this.game.renderer.height * 0.62, 'Load', { fontSize: '48px', fill: '#ffffff' }).setDepth(20).setOrigin(0.5, 0);
    option4.setInteractive();
    option4.on('pointerdown',()=>{

    let width = this.sys.game.config.width;
    let height = this.sys.game.config.height;
    let rectangle = this.add.rectangle(width / 2, height / 2, width, height, 0x000000);
    let rectangle2 = this.add.rectangle(width / 2, height / 2, width / 1.2, height / 3, 0x000000);
    rectangle.setAlpha(0.5);
    rectangle.setDepth(40);
    rectangle.setInteractive();
    rectangle2.setDepth(41);
            
    // Texto
    let textconfirm = this.add.text(width / 2, height / 2.5, "Quit to Load?", { fontSize: '72px', fill: '#ffffff' }).setOrigin(0.5);
    textconfirm.setDepth(42);
        
    let yes_btn = this.add.image(width / 2.2, height / 1.8,'yes_btn').setOrigin(1,0.5).setDepth(42).setScale(1.5);
    yes_btn.setInteractive();
    yes_btn.on('pointerdown',()=>{

    this.scene.start(CST.SCENES.MENU,{enter_load: 1});
    })

    let no_btn= this.add.image(width / 1.8, height / 1.8,'no_btn').setOrigin(0,0.5).setDepth(42).setScale(1.5);
    no_btn.setInteractive();
    no_btn.on('pointerdown',()=>{
    rectangle.destroy();
    rectangle2.destroy();
    textconfirm.destroy();
    yes_btn.destroy();
    no_btn.destroy();
    this.menu.x = this.game.renderer.width / 1.07;


    up_arrow.x = this.game.renderer.width * 0.90;
    down_arrow.x = this.game.renderer.width * 0.90;

    });
    quithandler();
    });

    // load.on('pointerdown',()=>{
    


    // let Return = this.add.text(this.game.renderer.width / 2, this.game.renderer.height * 0.69, 'Quit to Menu', { fontSize: '48px', fill: '#ffffff' }).setDepth(20).setOrigin(0.5, 0);
    option5.setInteractive();
    option5.on('pointerdown',()=>{
    
    let width = this.sys.game.config.width;
    let height = this.sys.game.config.height;
    let rectangle = this.add.rectangle(width / 2, height / 2, width, height, 0x000000);
    let rectangle2 = this.add.rectangle(width / 2, height / 2, width / 1.2, height / 3, 0x000000);
    rectangle.setAlpha(0.5);
    rectangle.setDepth(40);
    rectangle.setInteractive();
    rectangle2.setDepth(41);
            
    // Texto
    let textconfirm = this.add.text(width / 2, height / 2.5, "Quit to Menu?", { fontSize: '72px', fill: '#ffffff' }).setOrigin(0.5);
    textconfirm.setDepth(42);
        
    let yes_btn = this.add.image(width / 2.2, height / 1.8,'yes_btn').setOrigin(1,0.5).setDepth(42).setScale(1.5);
    yes_btn.setInteractive();
    yes_btn.on('pointerdown',()=>{
    this.scene.start(CST.SCENES.MENU,{enter_load: 0});
    })

    let no_btn= this.add.image(width / 1.8, height / 1.8,'no_btn').setOrigin(0,0.5).setDepth(42).setScale(1.5);
    no_btn.setInteractive();
    no_btn.on('pointerdown',()=>{
    rectangle.destroy();
    rectangle2.destroy();
    textconfirm.destroy();
    yes_btn.destroy();
    no_btn.destroy();
    this.menu.x = this.game.renderer.width / 1.07;

    up_arrow.x = this.game.renderer.width * 0.90;
    down_arrow.x = this.game.renderer.width * 0.90;

    });
    quithandler();
    // this.scene.start(CST.SCENES.MENU);
    });
    
    let quit_btn = this.add.image(this.game.renderer.width / 1.15, this.game.renderer.height * 0.15, 'quit_btn').setDepth(20).setScale(1.2);
    quit_btn.setInteractive();
    quit_btn.on('pointerdown', ()=>{

        up_arrow.x = this.game.renderer.width * 0.90;
        down_arrow.x = this.game.renderer.width * 0.90;
        this.menu.x = this.game.renderer.width / 1.07;

        quithandler();
    });

    function quithandler(){
        option1.destroy();
        option1_text.destroy();
        option2.destroy();
        option2_text.destroy();
        option3.destroy();
        option3_text.destroy();
        option4.destroy();
        option4_text.destroy();
        option5.destroy();
        option5_text.destroy();

        option1_img.destroy();
        option2_img.destroy();
        option3_img.destroy();
        option4_img.destroy();
        option5_img.destroy();

        backdrop_menu.destroy();
        sfx_mix.destroy();
        music_mix.destroy();
        barBackground.destroy();
        text.destroy();
        barFill.destroy();
        barArea.destroy();
        barBackground2.destroy();
        text2.destroy();
        barFill2.destroy();
        barArea2.destroy();
        quit_btn.destroy();
        menurectangle.destroy();

        flag4 = 0;
    }

this.menu.x = this.game.renderer.width + 100;
},this);


    // Iconos Izquierda
    let facecolor = this.add.image(-200, this.game.renderer.height * 0.56 , "facecolor").setDepth(5).setScale(1.4).setOrigin(0.5);
    


this.tween_derecha = this.tweens.add({
    targets: [this.menu],
    x: this.game.renderer.width / 1.07,
    ease: 'Sine.easeIn',
    duration: 500,
    paused: true,
    persist: true
})
this.tween_derecha.play();

this.tween_derecha_back = this.tweens.add({
    targets: [this.menu],
    x: this.game.renderer.width + 100,
    ease: 'Sine.easeIn',
    duration: 500,
    paused: true,
    persist: true
})

this.tween_izquierda = this.tweens.add({
    targets: [facecolor],
    x: this.game.renderer.width * 0.07,
    ease: 'Sine.easeIn',
    duration: 500,
    paused: true,
    persist: true
})
this.tween_izquierda.play();

this.tween_izquierda_back = this.tweens.add({
    targets: [facecolor],
    x: -200,
    ease: 'Sine.easeIn',
    duration: 500,
    paused: true,
    persist: true
})



    // Facecolor Function

    facecolor.setInteractive();
    facecolor.on('pointerdown',()=>{

    if(flag2 === 0){
        tap3.play();

    let skins = this.add.group();
    skins.createMultiple({ key: 'skins', frame: [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16 ], repeat: -1, });
    this.skins = skins;
    skins.setDepth(11);
    skins.scaleX(1.5);
    skins.scaleY(1.5);
    skins.setOrigin(0);
    let skin_gph = this.skins.getChildren();

    Phaser.Actions.GridAlign(skins.getChildren(), {
    width: 2,
    height: 12,
    cellWidth: 48,
    x: 6,
    y: this.game.renderer.height * 0.18,
    });

    skin_gph[0].setTint(0xEB957F);
    skin_gph[0].setInteractive();
    skin_gph[0].on('pointerdown',()=>{
        tap2.play();
        doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[0]);
        this.data.set('val14', 0);
        ear_2.setTexture('ear2_1');
    })

    skin_gph[1].setTint(0xF3AB80);
    skin_gph[1].setInteractive();
    skin_gph[1].on('pointerdown',()=>{
        tap2.play();
        doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[1]);
        this.data.set('val14', 1);
        ear_2.setTexture('ear2_2');
    })

    skin_gph[2].setTint(0xE86248);
    skin_gph[2].setInteractive();
    skin_gph[2].on('pointerdown',()=>{
        tap2.play();
        doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[2]);
        this.data.set('val14', 2);
        ear_2.setTexture('ear2_3');
    })

    skin_gph[3].setTint(0xE48169);
    skin_gph[3].setInteractive();
    skin_gph[3].on('pointerdown',()=>{
        tap2.play();
        doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[3]);
        this.data.set('val14', 3);
        ear_2.setTexture('ear2_4');
    })

    skin_gph[4].setTint(0xAA5F50);
    skin_gph[4].setInteractive();
    skin_gph[4].on('pointerdown',()=>{
        tap2.play();
        doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[4]);
        this.data.set('val14', 4);
        ear_2.setTexture('ear2_5');
    })

    skin_gph[5].setTint(0x8D675F);
    skin_gph[5].setInteractive();
    skin_gph[5].on('pointerdown',()=>{
        tap2.play();
        doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[5]);
        this.data.set('val14', 5);
        ear_2.setTexture('ear2_6');
    })

    skin_gph[6].setTint(0xE6A090);
    skin_gph[6].setInteractive();
    skin_gph[6].on('pointerdown',()=>{
        tap2.play();
        doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[6]);
        this.data.set('val14', 6);
        ear_2.setTexture('ear2_7');
    })

    skin_gph[7].setTint(0xE99891);
    skin_gph[7].setInteractive();
    skin_gph[7].on('pointerdown',()=>{
        tap2.play();
        doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[7]);
        this.data.set('val14', 7);
        ear_2.setTexture('ear2_8');
    })

    skin_gph[8].setTint(0xF6BBAC);
    skin_gph[8].setInteractive();
    skin_gph[8].on('pointerdown',()=>{
        tap2.play();
        doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[8]);
        this.data.set('val14', 8);
        ear_2.setTexture('ear2_9');
    })

    skin_gph[9].setTint(0xF8BBB6);
    skin_gph[9].setInteractive();
    skin_gph[9].on('pointerdown',()=>{
        tap2.play();
        doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[9]);
        this.data.set('val14', 9);
        ear_2.setTexture('ear2_10');
    })

    skin_gph[10].setTint(0xEDC5BC);
    skin_gph[10].setInteractive();
    skin_gph[10].on('pointerdown',()=>{
        tap2.play();
        doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[10]);
        this.data.set('val14', 10);
        ear_2.setTexture('ear2_11');
    })


    skin_gph[11].setTint(0xAD9DC6);
    skin_gph[11].setInteractive();
    skin_gph[11].on('pointerdown',()=>{
        tap2.play();
        doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[11]);
        this.data.set('val14', 11);
        ear_2.setTexture('ear2_12');
    })

    skin_gph[12].setTint(0x9DA9C6);
    skin_gph[12].setInteractive();
    skin_gph[12].on('pointerdown',()=>{
        tap2.play();
        doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[12]);
        this.data.set('val14', 12);
        ear_2.setTexture('ear2_13');
    })

    skin_gph[13].setTint(0x9EC7C1);
    skin_gph[13].setInteractive();
    skin_gph[13].on('pointerdown',()=>{
        tap2.play();
        doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[13]);
        this.data.set('val14', 13);
        ear_2.setTexture('ear2_14');
    })

    skin_gph[14].setTint(0x747474);
    skin_gph[14].setInteractive();
    skin_gph[14].on('pointerdown',()=>{
        tap2.play();
        doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[14]);
        this.data.set('val14', 14);
        ear_2.setTexture('ear2_15');
    })

    skin_gph[15].setTint(0xAEACAB);
    skin_gph[15].setInteractive();
    skin_gph[15].on('pointerdown',()=>{
        tap2.play();
        doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[15]);
        this.data.set('val14', 15);
        ear_2.setTexture('ear2_16');
    })

    skin_gph[16].setTint(0xD8CECC);
    skin_gph[16].setInteractive();
    skin_gph[16].on('pointerdown',()=>{
        tap2.play();
        doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[16]);
        this.data.set('val14', 16);
        ear_2.setTexture('ear2_17');
    })


    flag2 = 1;
    }else if (flag2 === 1){
    tap3_2.play();
    this.skins.destroy(true, true);
    flag2= 0;
    }
    })

    let layerxpos = this.game.renderer.width / 2;
    let layerypos = this.game.renderer.height * 0.36;

    const layer1 = this.add.container(layerxpos,layerypos);
    layer1.setSize(720,1280);
    layer1.setScale(1.2);
    layer1.setDepth(1);

    const layer2 = this.add.container(layerxpos, layerypos);
    layer2.setSize(680,920);
    layer2.setDepth(2);
    layer2.setScale(0.9);

    const layer3 = this.add.container(layerxpos, layerypos);
    layer3.setSize(360,360);
    layer3.setDepth(3);
    layer3.setScale(0.9);

    const layer4 = this.add.container(layerxpos, layerypos);
    layer4.setSize(680,920);
    layer4.setDepth(4);
    layer4.setScale(0.9);

    const layer5 = this.add.container(layerxpos, layerypos);
    layer5.setSize(350,450);
    layer5.setDepth(5);
    layer5.setScale(0.9);

    const layer6 = this.add.container(layerxpos, layerypos);
    layer6.setSize(350,450);
    layer6.setDepth(6);
    layer6.setScale(0.9);

    const layer7 = this.add.container(layerxpos, layerypos);
    layer7.setSize(180,180);
    layer7.setDepth(7);
    layer7.setScale(0.9);

    const layer8 = this.add.container(layerxpos, layerypos);
    layer8.setSize(180,180);
    layer8.setDepth(8);
    layer8.setScale(0.9);

    const layer9 = this.add.container(layerxpos, layerypos);
    layer9.setSize(350,450);
    layer9.setDepth(9);
    layer9.setScale(0.9);

    const layer10 = this.add.container(layerxpos, layerypos);
    layer10.setSize(360,360);
    layer10.setDepth(10);
    layer10.setScale(0.9);

    const layer11 = this.add.container(layerxpos, layerypos);
    layer11.setSize(680,920);
    layer11.setDepth(11);
    layer11.setScale(0.9);

    const layer12 = this.add.container(layerxpos, layerypos);
    layer12.setSize(680,920);
    layer12.setDepth(12);
    layer12.setScale(0.9);

    const layer13 = this.add.container(layerxpos, layerypos);
    layer13.setSize(680,920);
    layer13.setDepth(13);
    layer13.setScale(0.9);

    const layer14 = this.add.container(layerxpos, layerypos);
    layer14.setSize(680,920);
    layer14.setDepth(14);
    layer14.setScale(0.9);

    const layer15 = this.add.container(275,this.game.renderer.height * 0.72);
    layer15.setSize(400,120);
    layer15.setDepth(19);
    layer15.setInteractive();

    const layer16 = this.add.container(0,0);
    layer16.setSize(this.game.renderer.width, this.game.renderer.height);
    layer16.setDepth(16);

    const layer17 = this.add.container(layerxpos, layerypos);
    layer17.setSize(680,920);
    layer17.setDepth(17);
    layer17.setScale(0.9);

    const layer18 = this.add.container(layerxpos, layerypos);
    layer18.setSize(680,920);
    layer18.setDepth(18);
    layer18.setScale(0.9);

    const layer19 = this.add.container(layerxpos, layerypos);
    layer19.setSize(680,920);
    layer19.setDepth(19);
    layer19.setScale(0.9);

    // Color Variations
    const layer20 = this.add.container(0,0);
    layer20.setSize(this.game.renderer.width, this.game.renderer.height);
    layer20.setDepth(19);
    


// Up Shirt & Down Shirt
let up_arrow = this.add.image(this.game.renderer.width * 0.90, this.game.renderer.height * 0.30, 'up_arrow');
up_arrow.setDepth(20);
up_arrow.setInteractive();
up_arrow.on('pointerdown',()=>{
    // localStorage.setItem('shirt_flag' + this.slot_cur,0);
    this.data.set('shirt_flag' + this.slot_cur,0);
    up_arrow.setTint(0x5c5c5c);
    down_arrow.setTint(0xffffff);
    this.data.set('shirt_flag',0);
    layer9.setDepth(9);
});

let down_arrow = this.add.image(this.game.renderer.width * 0.90, this.game.renderer.height * 0.38, 'down_arrow');
down_arrow.setDepth(20);
down_arrow.setInteractive();
down_arrow.on('pointerdown',()=>{
    // localStorage.setItem('shirt_flag' + this.slot_cur, 1);
    this.data.set('shirt_flag' + this.slot_cur,1);
    up_arrow.setTint(0xffffff);
    down_arrow.setTint(0x5c5c5c);
    this.data.set('shirt_flag',1);
    layer9.setDepth(4);
});

// Shirt Flag 
if(this.data.get('shirt_flag' + this.slot_cur) != 1){
    up_arrow.setTint(0x5c5c5c);
    layer9.setDepth(9);
}else{
    down_arrow.setTint(0x5c5c5c);
    layer9.setDepth(4);
}

up_arrow.setVisible(false);
down_arrow.setVisible(false);


    // Create a rectangle that represents the clickable zone
    
    
let zone = new Phaser.Geom.Rectangle(0, this.game.renderer.height * 0.66, this.game.renderer.width, 142);


this.input.on('pointerdown', function (pointer){
    
    this.draginit = 1;
    this.initx = pointer.x;
    this.layerpos = layer15.x;
    
})

this.input.on('pointerup', function (pointer){
        this.isDragging = false;
        this.draginit = 0;
})


this.input.on('pointermove', function (pointer) {

    if(flag4===0){
    if(this.draginit === 1){
        this.xpos = this.initx - pointer.x;

        if (zone.contains(pointer.x, pointer.y)) {
        this.isDragging = true;
        layer15.x = Math.min(Math.max(this.layerpos - this.xpos, -930),280);
    
        }else if(!zone.contains(pointer.x, pointer.y)) {
        this.isDragging = false;
        this.draginit = 0;
        }
    }
  }
})


let zone2 = new Phaser.Geom.Rectangle(0, this.game.renderer.height * 0.78, this.game.renderer.width, 300);

let width = this.sys.game.config.width;
let height = this.sys.game.config.height;

this.input.on('pointerdown', function (pointer){
    
    this.draginit_y = 1;
    this.init_y = pointer.y;
    this.layerpos_y = layer16.y;
    
})

this.input.on('pointerup', function (pointer){
        this.isDragging_y = false;
        this.draginit_y = 0;
        zone2.setPosition(0, height * 0.78);
        zone2.setSize(width,300);
})


this.input.on('pointermove', function (pointer) {

    if(flag4===0){
    if(this.draginit_y === 1){
        this.ypos = this.init_y - pointer.y;

        if (zone2.contains(pointer.x, pointer.y)) {
        this.isDragging_y = true;
        zone2.y = 0;
        zone2.setSize(720,1280);
        // Establece el Límite Aquí
        layer16.y = Math.min(Math.max(this.layerpos_y - this.ypos, -160 * (1 * (Math.max(layer16_y_cap -1,0)))),0);
        frameout.y = itemypos + Math.min(Math.max(this.layerpos_y - this.ypos, -160 * (1 * (Math.max(layer16_y_cap -1,0)))),0);

        if(frameout.y < 905){
            frameout.setVisible(false);
        }else{
            frameout.setVisible(true);
        }

        layer16_limit = Number(Math.floor(layer16.y / -120));

        if(layer16_y_cap > 0){
            if(layer16.y <= -120){
            for(let e = 0; e<5; e++){
                let limit2 = Number(e + 5 * Math.max(layer16_limit-1),0);
                layer16.getAt(limit2).setVisible(false);
            }
            }
            
            let manh = -120 - (120 * layer16_limit);
            if(layer16.y >= manh){
            for(let i = 0; i<5; i++){
            let limit = Number(i + 5 * (layer16_limit));
            layer16.getAt(limit).setVisible(true);
            }
        }
    }
    
        }else if(!zone2.contains(pointer.x, pointer.y)) {
        this.isDragging_y = false;
        this.draginit_y = 0;
        zone2.setPosition(0, height * 0.78);
        zone2.setSize(width,300);
        }
    }
  }
})



    layer4.add([
        doll
    ])

    


    // Dresses
    let dress1 = this.add.image(-400,-400,"dress_1")
    let dress2 = this.add.image(-400,-400,"dress_2")
    let dress3 = this.add.image(-400,-400,"dress_3")



    this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
    gameObject.x = dragX;
    gameObject.y = dragY;
    del_clothes.setPosition(0, 970);
    });

    

    layer5.on('drag', function(pointer){
        layer5.setDepth(30);
    });

    layer6.on('drag', function(pointer){
        layer6.setDepth(30);
    });

    layer9.on('drag', function(pointer){
        layer9.setDepth(30);
    });

    
    this.input.on('dragend', function(pointer){
        layer5.setDepth(5);
        layer6.setDepth(6);
        layer9.setDepth(9);
        del_clothes.setPosition(0, -500);
    });


// Clothes, Shirts, Top
    this.input.on('dragend', ()=>{
        if(layer9.y > 840){
        layer9.remove([
        dress1.setPosition(-400,-400),
        dress2.setPosition(-400,-400),
        dress3.setPosition(-400,-400),
        shirt1.setPosition(-400,-400),
        shirt2.setPosition(-400,-400),
        top1.setPosition(-400,-400),
        top2.setPosition(-400,-400),
        ])
    
        // Current Cloth

        this.data.set('val1', 0);
        this.data.set('val2', 0);
        this.data.set('val5', 0);
        this.data.set('dress1', 0);
        this.data.set('dress2', 0);
        this.data.set('dress3', 0);
        this.data.set('top1', 0);
        this.data.set('top2', 0);
        this.data.set('shirt1', 0);
        this.data.set('shirt2', 0);
        frameout.setPosition(-170, itemypos)

        metal.play();
        }
    });

//pants
this.input.on('dragend', ()=>{
    if(layer5.y > 840){
    layer5.remove([
    pants1.setPosition(-400,-400),
    pants2.setPosition(-400,-400),
    pants3.setPosition(-400,-400),
    pants4.setPosition(-400,-400),
    ])
    // Current Cloth
    this.data.set('val7', 0);
    this.data.set('pants1', 0);
    this.data.set('pants2', 0);
    this.data.set('pants3', 0);
    this.data.set('pants4', 0);
    frameout.setPosition(-170, itemypos)
    metal.play();
    }
});

// Skirts
this.input.on('dragend', ()=>{
    if(layer6.y > 840){
    layer6.remove([
    skirt1.setPosition(-400,-400),
    skirt2.setPosition(-400,-400),
    skirt3.setPosition(-400,-400),
    skirt4.setPosition(-400,-400),
    ])
    // Current Cloth
    this.data.set('val6', 0);
    this.data.set('skirt1', 0);
    this.data.set('skirt2', 0);
    this.data.set('skirt3', 0);
    this.data.set('skirt4', 0);
    frameout.setPosition(-170, itemypos)
    metal.play();
    }
});

    



    // dress1.on('pointerup', ()=> {
    //     this.isDragging = false;
    // })


        
    

    // Shirts
    let shirt1 = this.add.image(-400, -400, "shirt_1_1");

    let shirt2 = this.add.image(-400, -400, "shirt_2_1");

    let shirt3 = this.add.image(-400, -400, "shirt_3_1");

    let shirt4 = this.add.image(-400, -400, "shirt_4_1");

    // Tops
    let top1 = this.add.image(-400, -400, "top_1");
    let top2 = this.add.image(-400, -400, "top_2");
    let top3 = this.add.image(-400, -400, "top_3");
    let top4 = this.add.image(-400, -400, "top_4");
    let top5 = this.add.image(-400, -400, "top_5");
    let top6 = this.add.image(-400, -400, "top_6");
    let top7 = this.add.image(-400, -400, "top_7");
    let top8 = this.add.image(-400, -400, "top_8");
    let top9 = this.add.image(-400, -400, "top_9");
    let top10 = this.add.image(-400, -400, "top_10");
    let top11 = this.add.image(-400, -400, "top_11");
    let top12 = this.add.image(-400, -400, "top_12");
    let top13 = this.add.image(-400, -400, "top_13");
    let top14 = this.add.image(-400, -400, "top_14");
    let top15 = this.add.image(-400, -400, "top_15");




    // Hairs
    let hair1 = this.add.image(-400, -400, "hair_1");
    let hair2 = this.add.image(-400, -400, "hair_2");
    let hair3 = this.add.image(-400, -400, "hair_3");
    let hair4 = this.add.image(-400, -400, "hair_4");
    let hair5 = this.add.image(-400, -400, "hair_5");
    let hair6 = this.add.image(-400, -400, "hair_6");
    let hair7 = this.add.image(-400, -400, "hair_7");
    let hair8 = this.add.image(-400, -400, "hair_8");
    let hair9 = this.add.image(-400, -400, "hair_9");
    let hair10 = this.add.image(-400, -400, "hair_10");

    // Back-Hair
    let backhair1 = this.add.image(-400, -400, "backhair_1");
    let backhair2 = this.add.image(-400, -400, "backhair_2");
    let backhair3 = this.add.image(-400, -400, "backhair_3");
    let backhair4 = this.add.image(-400, -400, "backhair_4");
    let backhair5 = this.add.image(-400, -400, "backhair_5");
    let backhair6 = this.add.image(-400, -400, "backhair_6");
    let backhair7 = this.add.image(-400, -400, "backhair_7");
    
    // Skirt
    let skirt1 = this.add.image(-400, -400, "skirt_1_1");
    let skirt2 = this.add.image(-400, -400, "skirt_2_1");
    let skirt3 = this.add.image(-400, -400, "skirt_3_1");

    // Pants
    let pants1 = this.add.image(-400, -400, "pants_1_1");

    let pants2 = this.add.image(-400, -400, "pants_2_1");

    let pants3 = this.add.image(-400, -400, "pants_3_1");

    let pants4 = this.add.image(-400, -400, "pants_4_1");

    // STRAINS (ACC1)
    let acc1_1 = this.add.image(-400, -400, "strains_1");

    // Accessories 2
    let acc2_1 = this.add.image(-400, -400, "acc2_1_1");

    let acc2_2 = this.add.image(-400, -400, "acc2_2_1");

    let acc2_3 = this.add.image(-400, -400, "acc2_3_1");

    // Accessories 3
    let acc3_1 = this.add.image(-400, -400, "acc3_1");
    let acc3_2 = this.add.image(-400, -400, "acc3_2");

    // Eyes
    let eye1_1 = this.add.image(-400, -400, "eye1_1");
    let eye1_2 = this.add.image(-400, -400, "eye1_2");

    // Eyebrows
    let eyebrow_1 = this.add.image(-400, -400, "eyebrow_1");
    let eyebrow_2 = this.add.image(-400, -400, "eyebrow_2");
    let eyebrow_3 = this.add.image(-400, -400, "eyebrow_3");
    let eyebrow_4 = this.add.image(-400, -400, "eyebrow_4");
    let eyebrow_5 = this.add.image(-400, -400, "eyebrow_5");
    let eyebrow_6 = this.add.image(-400, -400, "eyebrow_6");
    let eyebrow_7 = this.add.image(-400, -400, "eyebrow_7");
    let eyebrow_8 = this.add.image(-400, -400, "eyebrow_8");
    let eyebrow_9 = this.add.image(-400, -400, "eyebrow_9");
    let eyebrow_10 = this.add.image(-400, -400, "eyebrow_10");
    let eyebrow_11 = this.add.image(-400, -400, "eyebrow_11");

    
    // Backgrounds
    let background_0 = this.add.image(-900, -1200, "background_0")
    let background_1 = this.add.image(-900, -1200, "background_1")
    let background_2 = this.add.image(-900, -1200, "background_2")
    let background_3 = this.add.image(-900, -1200, "background_3")


    // Noses
    let nose_1 = this.add.image(-400, -400, "nose_1");
    let nose_2 = this.add.image(-400, -400, "nose_2");
    let nose_3 = this.add.image(-400, -400, "nose_3");
    let nose_4 = this.add.image(-400, -400, "nose_4");
    let nose_5 = this.add.image(-400, -400, "nose_5");
    let nose_6 = this.add.image(-400, -400, "nose_6");
    let nose_7 = this.add.image(-400, -400, "nose_7");
    let nose_8 = this.add.image(-400, -400, "nose_8");
    let nose_9 = this.add.image(-400, -400, "nose_9");
    let nose_10 = this.add.image(-400, -400, "nose_10");
    let nose_11 = this.add.image(-400, -400, "nose_11");

    // Mouths
    let mouth_1 = this.add.image(-400, -400, "mouth_1");
    let mouth_2 = this.add.image(-400, -400, "mouth_2");
    let mouth_3 = this.add.image(-400, -400, "mouth_3");
    let mouth_4 = this.add.image(-400, -400, "mouth_4");
    let mouth_5 = this.add.image(-400, -400, "mouth_5");
    let mouth_6 = this.add.image(-400, -400, "mouth_6");
    let mouth_7 = this.add.image(-400, -400, "mouth_7");
    let mouth_8 = this.add.image(-400, -400, "mouth_8");
    let mouth_9 = this.add.image(-400, -400, "mouth_9");
    let mouth_10 = this.add.image(-400, -400, "mouth_10");
    let mouth_11 = this.add.image(-400, -400, "mouth_11");

    // Ears
    let ear_1 = this.add.image(-400, -400, "ear_1");
    let ear_2 = this.add.image(-400, -400, "ear_2");
    
    // Frame
    let frameout = this.add.image(-400,-400,"frame").setOrigin(0);
    frameout.setDepth(16);
    

    // Icon Outline
    let iconoutline = this.add.image(-400,-400,"icon_outline");
    iconoutline.setDepth(40);


    // Iconos
    let cur_icon = 0;


    // Default Sets

    layer1.add([
    background_1.setPosition(0,0)
    ])

    layer7.add([
    eye1_1.setPosition(0,0)
    ])

    layer8.add([
    eyebrow_1.setPosition(0,0)
    ])

    layer5.add([
    nose_1.setPosition(0,0)
    ])

    layer5.add([
    pants1.setPosition(0,0)
    ])

    layer5.add([
    mouth_1.setPosition(0,0)
    ])

    layer3.add([
    backhair1.setPosition(0,0)
    ])

    layer9.add([
    shirt1.setPosition(0,0)
    ])

    layer12.add([
    hair1.setPosition(0,0)
    ])



    this.data.set('val3', 1);
    this.data.set('val4', 1);
    this.data.set('val5', 1);
    this.data.set('val7', 1);
    this.data.set('val11', 1);
    this.data.set('val11_1', 1);
    this.data.set('val12', 1);
    this.data.set('val13', 1);
    this.data.set('val15', 1);
    this.data.set('val16', 1);
    this.data.set('val17', 1);


    this.data.set('shirt_var1', 1);
    this.data.set('pants_var1', 1);

    // Default Y Pos for Icon Clothes

    let itemypos = this.game.renderer.height * 0.81;
    
    this.init_y = this.game.renderer.height * 0.81;





    


    // Slot Icono 1
    let dress_slot = this.add.image(75, this.game.renderer.height * 0.72, 'dress_icon1');
    dress_slot.setInteractive();
    dress_slot.setDepth(18);

    dress_slot.on('pointerdown',()=>{
    this.assetdestroy.emit('destroy');

    iconoutline.setPosition  (-200 + 118 * 12, 0)

    // ACC3 (2)
    layer2.removeInteractive();
    // BackHair (3)
    layer3.removeInteractive();
    // Doll (4)

    // Pants (5)
    layer5.removeInteractive();
    // Skirt (6)
    layer6.removeInteractive();
    // Eyes (7)
    layer7.removeInteractive();
    // Cejas (8)
    layer8.removeInteractive();
    // Dress - Top - Shirt (9)
    
    // Hairs (10)
    layer10.removeInteractive();
    // ACC1 (11)
    layer11.removeInteractive();
    // ACC2 (12)
    layer12.removeInteractive();
    
    // if(this.data.get('val1') != 0){
    // layer9.setInteractive();
    // this.input.setDraggable(layer9);
    // }else if(this.data.get('val1') === 0){
    // layer9.removeInteractive();
    // }
 

    // Tap Sound
    tap4.play();
    up_arrow.setVisible(false);
    down_arrow.setVisible(false);
       
    // Casilla 1 -- Vestidos --
    let dress = this.add.group();
    dress.createMultiple({ key: 'dresses', frame: [ 0,1,2 ], repeat: -1, });
    this.dress = dress;
    dress.setDepth(11);

    let dress_qty = 0;
    let dress_pick = [dress1, dress2, dress3];
    layer16_qty = dress_pick.length;
    layer16_y_cap = Number(Math.floor(dress_pick.length / 5));
    layer16.setVisible(true);
    layer16.y = 0;
    tap4.play();
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val1') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val1'),1)) + 130 * Math.max(this.data.get('val1')  - (1  +  5 * Math.floor(Math.min((this.data.get('val1') - 1) / 5,99))),0) , itemypos);
    
    dress.getChildren().forEach(child => {
    layer16.add(child);
    child.setInteractive();
    dress_qty++;
    child.id = dress_qty;
    
    // Trigger
    child.on('pointerdown',()=>{
    
    tap2.play();
    
    // Remove all Images
    this.data.set('val1',0);
    layer10.remove([
    dress1.setPosition(-800,-400),dress2.setPosition(-800,-400), dress3.setPosition(-800,-400),
    ])
            
    // If not selected before, add image
    if(this.data.get('dress' + child.id) === 0){
    let i = 0;
    dress.getChildren().forEach(child => {
    i++;
    this.data.set('dress' + i, 0);
    })
    
    let child_id = Number(child.id - 1);
    layer10.setPosition(layerxpos, layerypos);
    layer10.add([
    dress_pick[child_id].setPosition(0,0)
    ])
    this.data.set('val1', child.id);
    this.data.set('dress' + child.id, 1);
    frameout.setVisible(true);
    }
    
    // If selected before, remove image 
    else if(this.data.get('dress' + child.id) === 1){
    this.data.set('dress' + child.id, 0);
    frameout.setVisible(false);
    }
        
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val1') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val1'),1)) + 130 * Math.max(this.data.get('val1')  - (1  +  5 * Math.floor(Math.min((this.data.get('val1') - 1) / 5,99))),0) , itemypos + layer16.y);
    
    });    
});
    
    Phaser.Actions.GridAlign(dress.getChildren(), {
    width: 5,
    height: 5,
    cellWidth: 130,
    x: 54,
    y: this.game.renderer.height * 0.81
    });
})
    // dress.getChildren().forEach(child => {
    //     layer16.add(child);
    // });

    // Phaser.Actions.GridAlign(dress.getChildren(), {
    // width: 5,
    // height: 5,
    // cellWidth: 130,
    // x: 54,
    // y: itemypos
    // });


    // frameout.setPosition(-170 + (224 * Math.min(this.data.get('val1'),1)) + 130 * Math.max(this.data.get('val1')-1,0), itemypos);


    // // Vestido 1
    // dress_gph[0].setInteractive();
    // dress_gph[0].on('pointerdown',()=>{

    // layer9.setInteractive();
    // this.input.setDraggable(layer9);
    // tap2.play();
        
    // layer9.remove([
    // dress2.setPosition(-400,-400),
    // dress3.setPosition(-400,-400)
    // ])
    // layer9.remove([ 
    // shirt1.setPosition(-400,-400),
    // shirt2.setPosition(-400,-400),
    // shirt3.setPosition(-400,-400),
    // shirt4.setPosition(-400,-400),
    // ])


    // // Current Frame
    // this.data.set('val1', 1);
    // this.data.set('val5', 0);
   


    // // Checker
    // if(this.data.get('dress1') === 0 ){

    
    // layer9.setPosition(layerxpos, layerypos);
    // layer9.add([
    // dress1.setPosition(0,0)
    // ])
    // this.data.set('dress1', 1);
    // this.data.set('dress2', 0);
    // this.data.set('dress3', 0);
    // this.data.set('shirt1', 0);
    // this.data.set('shirt2', 0);
    // this.data.set('shirt3', 0);
    // this.data.set('shirt4', 0);


    // }else if(this.data.get('dress1') === 1){
    
    // layer9.removeInteractive();
    // layer9.remove([
    // dress1.setPosition(-400,-400)
    // ])
    
    // this.data.set('val1', 0);
    // this.data.set('dress1', 0); 
    // }
    // // Frame Position
    // frameout.setPosition(-170 + (224 * Math.min(this.data.get('val1'),1)) + 130 * Math.max(this.data.get('val1')-1,0), itemypos);
    // })

    
    // // Vestido 2
    // dress_gph[1].setInteractive();
    // dress_gph[1].on('pointerdown',()=>{

    // layer9.setInteractive();
    // this.input.setDraggable(layer9);
    // tap2.play();

    // // Adding Clothes
    // layer9.remove([
    // dress1.setPosition(-400,-400),
    // dress3.setPosition(-400,-400)
    // ])
    // layer9.remove([ 
    // shirt1.setPosition(-400,-400),
    // shirt2.setPosition(-400,-400),
    // shirt3.setPosition(-400,-400),
    // shirt4.setPosition(-400,-400),
    // ])


    // // Current Frame
    // this.data.set('val1', 2);
    // this.data.set('val5', 0);


    // // Checker
    // if(this.data.get('dress2') === 0 ){

    // layer9.setPosition(layerxpos, layerypos);
    // layer9.add([
    // dress2.setPosition(0,0)
    // ])
    // this.data.set('dress1', 0);
    // this.data.set('dress2', 1);  
    // this.data.set('dress3', 0);
    // this.data.set('shirt1', 0);
    // this.data.set('shirt2', 0);
    // this.data.set('shirt3', 0);
    // this.data.set('shirt4', 0);
    
    // }else if(this.data.get('dress2') === 1){
    // layer9.removeInteractive();
    // layer9.remove([
    // dress2.setPosition(-400,-400)
    // ])
    // this.data.set('val1', 0);
    // this.data.set('dress2', 0); 
    // }

    // // Frame Position
    // frameout.setPosition(-170 + (224 * Math.min(this.data.get('val1'),1)) + 130 * Math.max(this.data.get('val1')-1,0), itemypos);

    // })

    // // Vestido 3
    // dress_gph[2].setInteractive();
    // dress_gph[2].on('pointerdown',()=>{

    // layer9.setInteractive();
    // this.input.setDraggable(layer9);
    // tap2.play();

    // layer9.remove([
    // dress1.setPosition(-400,-400),
    // dress2.setPosition(-400,-400),
    // ])
    // layer9.remove([ 
    // shirt1.setPosition(-400,-400),
    // shirt2.setPosition(-400,-400),
    // shirt3.setPosition(-400,-400),
    // shirt4.setPosition(-400,-400),
    // ])

    // // Current Cloth
    // this.data.set('val1', 3);
    // this.data.set('val5', 0);


    // // Checker
    // if(this.data.get('dress3') === 0 ){

    // layer9.setPosition(layerxpos, layerypos);
    // layer9.add([
    // dress3.setPosition(0,0)
    // ])
    // this.data.set('dress1', 0);
    // this.data.set('dress2', 0);  
    // this.data.set('dress3', 1);
    // this.data.set('shirt1', 0);
    // this.data.set('shirt2', 0);
    // this.data.set('shirt3', 0);
    // this.data.set('shirt4', 0);

    // }else if(this.data.get('dress3') === 1){
    // layer9.removeInteractive();
    // layer9.remove([
    // dress3.setPosition(-400,-400)
    // ])
    // this.data.set('val1', 0);
    // this.data.set('dress3', 0); 
    // }

    // // Frame Position
    // frameout.setPosition(-170 + (224 * Math.min(this.data.get('val1'),1)) + 130 * Math.max(this.data.get('val1')-1,0), itemypos);
    // })


    

    

    // Slot Icono 2
    let top_slot = this.add.image(75 * 2 + 20, this.game.renderer.height * 0.72, 'dress_icon2');
    top_slot.setInteractive();
    top_slot.setDepth(12);

    top_slot.on('pointerdown',()=>{
    this.assetdestroy.emit('destroy');

    iconoutline.setPosition  (-200 + 118 * 2, 0)

    // Remove Interactivity
    // Background (1)

    // ACC3 (2)
    layer2.removeInteractive();
    // BackHair (3)
    layer3.removeInteractive();
    // Doll (4)

    // Pants (5)
    layer5.removeInteractive();
    // Skirt (6)
    layer6.removeInteractive();
    // Eyes (7)
    layer7.removeInteractive();
    // Cejas (8)
    layer8.removeInteractive();
    // Dress - Top - Shirt (9)
    
    // Hairs (10)
    layer10.removeInteractive();
    // ACC1 (11)
    layer11.removeInteractive();
    // ACC2 (12)
    layer12.removeInteractive();

    tap4.play();

    up_arrow.setVisible(false);
    down_arrow.setVisible(false);

    layer16.setVisible(true);
    layer16.y = 0;
    // Casilla 2 -- TOPS --

    let tops = this.add.group();
    tops.createMultiple({ key: 'faceacc', frame: [ 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14 ], repeat: -1 });
    this.tops = tops;
    tops.setDepth(11);
    // let top_gph = this.tops.getChildren();

    let top_qty = 0;
    let top_pick = [top1,top2,top3,top4,top5,top6,top7,top8,top9,top10,top11,top12,top13,top14,top15];
    layer16_qty = top_pick.length;
    layer16_y_cap = Number(Math.floor(top_pick.length / 6));

    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val2') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val2'),1)) + 130 * Math.max(this.data.get('val2')  - (1  +  5 * Math.floor(Math.min((this.data.get('val2') - 1) / 5,99))),0) , itemypos);
    frameout.setVisible(true);

    tops.getChildren().forEach(child => {
    layer16.add(child);
    child.setInteractive();
    top_qty++;
    child.id = top_qty;

    child.on('pointerdown',()=>{
    tap2.play();
    this.data.set('val2',0);

    layer4.remove([
    top1.setPosition(-400,-400),top2.setPosition(-400,-400), top3.setPosition(-400,-400), top4.setPosition(-400,-400), 
    top5.setPosition(-400,-400), top6.setPosition(-400,-400), top7.setPosition(-400,-400), top8.setPosition(-400,-400),
    top9.setPosition(-400,-400), top10.setPosition(-400,-400), top11.setPosition(-400,-400), top12.setPosition(-400,-400),
    top13.setPosition(-400,-400), top14.setPosition(-400,-400), top15.setPosition(-400,-400),
    ])
        
    if(this.data.get('top' + child.id) === 0){

    let i = 0;
    tops.getChildren().forEach(child => {
    i++;
    this.data.set('top' + i, 0);
    })

    let child_id = Number(child.id - 1);
    layer4.setPosition(layerxpos, layerypos);
    layer4.add([
    top_pick[child_id].setPosition(0,0)
    ])
    this.data.set('val2', child.id);
    this.data.set('top' + child.id, 1);
    frameout.setVisible(true);
    }

    else if(this.data.get('top' + child.id) === 1){
    this.data.set('top' + child.id, 0);
    frameout.setVisible(false);
    }
    
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val2') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val2'),1)) + 130 * Math.max(this.data.get('val2')  - (1  +  5 * Math.floor(Math.min((this.data.get('val2') - 1) / 5,99))),0) , itemypos + layer16.y);
    });

    });

    Phaser.Actions.GridAlign(tops.getChildren(), {
        width: 5,
        height: 5,
        cellWidth: 130,
        x: 54,
        y: this.game.renderer.height * 0.81
    });
})

    // Slot Icono 3
    let hair_slot = this.add.image(75 * 3 + 40, this.game.renderer.height * 0.72, 'dress_icon3');
    hair_slot.setInteractive();
    hair_slot.setDepth(10);

    hair_slot.on('pointerdown',()=>{
    this.assetdestroy.emit('destroy');

    iconoutline.setPosition  (-200 + 118 * 6, 0)

    // Remove Interactivity
    // Background (1)

    // ACC3 (2)
    layer2.removeInteractive();
    // BackHair (3)
    layer3.removeInteractive();
    // Doll (4)

    // Pants (5)
    layer5.removeInteractive();
    // Skirt (6)
    layer6.removeInteractive();
    // Eyes (7)
    layer7.removeInteractive();
    // Cejas (8)
    layer8.removeInteractive();
    // Dress - Top - Shirt (9)
    layer9.removeInteractive();
    // Hairs (10)

    // ACC1 (11)
    layer11.removeInteractive();
    // ACC2 (12)
    layer12.removeInteractive();
    
    tap4.play();
    up_arrow.setVisible(false);
    down_arrow.setVisible(false);

    // Casilla 3 -- Cabellos --
    let hairs = this.add.group();
    hairs.createMultiple({ key: 'hairs', frame: [ 0,1,2,3,4,5,6,7,8,9 ], repeat: -1 });
    this.hairs = hairs;
    hairs.setDepth(11);
    
    let hairs_qty = 0;
    let hairs_pick = [hair1, hair2, hair3, hair4, hair5, hair6, hair7, hair8, hair9, hair10];
    layer16_qty = hairs_pick.length;
    layer16_y_cap = Number(Math.floor(hairs_pick.length / 6));
    layer16.setVisible(true);
    layer16.y = 0;
    tap4.play();
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val3') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val3'),1)) + 130 * Math.max(this.data.get('val3')  - (1  +  5 * Math.floor(Math.min((this.data.get('val3') - 1) / 5,99))),0) , itemypos);
    
    hairs.getChildren().forEach(child => {
    layer16.add(child);
    child.setInteractive();
    hairs_qty++;
    child.id = hairs_qty;
    
    // Trigger
    child.on('pointerdown',()=>{
    
    tap2.play();
    
    // Remove all Images
    this.data.set('val3',0);
    layer12.remove([
    hair1.setPosition(-800,-400),hair2.setPosition(-800,-400), hair3.setPosition(-800,-400), hair4.setPosition(-800,-400), 
    hair5.setPosition(-800,-400), hair6.setPosition(-800,-400), hair7.setPosition(-800,-400), hair8.setPosition(-800,-400),
    hair9.setPosition(-800,-400), hair10.setPosition(-800,-400), 
    ])
            
    // If not selected before, add image
    if(this.data.get('hair' + child.id) === 0){
    let i = 0;
    hairs.getChildren().forEach(child => {
    i++;
    this.data.set('hair' + i, 0);
    })
    
    let child_id = Number(child.id - 1);
    layer12.setPosition(layerxpos, layerypos);
    layer12.add([
    hairs_pick[child_id].setPosition(0,0)
    ])
    this.data.set('val3', child.id);
    this.data.set('hair' + child.id, 1);
    frameout.setVisible(true);
    }
    
    // If selected before, remove image 
    else if(this.data.get('hair' + child.id) === 1){
    let i = 0;
    hairs.getChildren().forEach(child => {
    i++;
    this.data.set('hair' + i, 0);
    })

    layer12.setPosition(layerxpos, layerypos);
    layer12.add([
    hair1.setPosition(0,0)
    ])
    this.data.set('val3', 1);
    this.data.set('hair1', 1);
    // this.data.set('hair' + child.id, 0);
    // frameout.setVisible(false);
    }
        
    // Icon Outline new Position
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val3') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val3'),1)) + 130 * Math.max(this.data.get('val3')  - (1  +  5 * Math.floor(Math.min((this.data.get('val3') - 1) / 5,99))),0) , itemypos + layer16.y);
    });    
});
    
        Phaser.Actions.GridAlign(hairs.getChildren(), {
        width: 5,
        height: 5,
        cellWidth: 130,
        x: 54,
        y: this.game.renderer.height * 0.81
    });
})

    // Slot Icono 4
    let backhair_slot = this.add.image(75 * 4 + 60, this.game.renderer.height * 0.72, 'dress_icon4');
    backhair_slot.setInteractive();
    backhair_slot.setDepth(10);

    backhair_slot.on('pointerdown',()=>{
    this.assetdestroy.emit('destroy');

    iconoutline.setPosition  (-200 + 118 * 7, 0)

    // ACC3 (2)
    layer2.removeInteractive();
    // Pants (5)
    layer5.removeInteractive();
    // Skirt (6)
    layer6.removeInteractive();
    // Eyes (7)
    layer7.removeInteractive();
    // Cejas (8)
    layer8.removeInteractive();
    // Dress - Top - Shirt (9)
    layer9.removeInteractive();
    // Hairs (10)
    layer10.removeInteractive();
    // ACC1 (11)
    layer11.removeInteractive();
    // ACC2 (12)
    layer12.removeInteractive();

    tap4.play();
    up_arrow.setVisible(false);
    down_arrow.setVisible(false);
    
    // Casilla 4 -- Cabello Atras --
    let backhairs = this.add.group();
    backhairs.createMultiple({ key: 'backhairs', frame: [ 0,1,2,3,4,5,6 ], repeat: -1 });
    this.backhairs = backhairs;
    backhairs.setDepth(11);

    
    let backhairs_qty = 0;
    let backhairs_pick = [backhair1, backhair2, backhair3, backhair4, backhair5, backhair6, backhair7];
    layer16_qty = backhairs_pick.length;
    layer16_y_cap = Number(Math.floor(backhairs_pick.length / 6));
    layer16.setVisible(true);
    layer16.y = 0;
    tap4.play();
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val4') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val4'),1)) + 130 * Math.max(this.data.get('val4')  - (1  +  5 * Math.floor(Math.min((this.data.get('val4') - 1) / 5,99))),0) , itemypos);
    
    backhairs.getChildren().forEach(child => {
    layer16.add(child);
    child.setInteractive();
    backhairs_qty++;
    child.id = backhairs_qty;
    
    // Trigger
    child.on('pointerdown',()=>{
    
    tap2.play();
    
    // Remove all Images
    this.data.set('val4',0);
    layer3.remove([
    backhair1.setPosition(-800,-400), backhair2.setPosition(-800,-400), backhair3.setPosition(-800,-400), backhair4.setPosition(-800,-400), 
    backhair5.setPosition(-800,-400), backhair6.setPosition(-800,-400), backhair7.setPosition(-800,-400), 
    ])
            
    // If not selected before, add image
    if(this.data.get('backhair' + child.id) === 0){
    let i = 0;
    backhairs.getChildren().forEach(child => {
    i++;
    this.data.set('backhair' + i, 0);
    })
    
    let child_id = Number(child.id - 1);
    layer3.setPosition(layerxpos, layerypos);
    layer3.add([
    backhairs_pick[child_id].setPosition(0,0)
    ])
    this.data.set('val4', child.id);
    this.data.set('backhair' + child.id, 1);
    frameout.setVisible(true);
    }
    
    // If selected before, remove image 
    else if(this.data.get('backhair' + child.id) === 1){

    let i = 0;
    backhairs.getChildren().forEach(child => {
    i++;
    this.data.set('backhair' + i, 0);
    })

    layer3.setPosition(layerxpos, layerypos);
    layer3.add([
    backhair1.setPosition(0,0)
    ])
    this.data.set('val4', 1);
    this.data.set('backhair1', 1);

    // this.data.set('backhair' + child.id, 0);
    // frameout.setVisible(false);
    }
        
    // Icon Outline new Position
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val4') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val4'),1)) + 130 * Math.max(this.data.get('val4')  - (1  +  5 * Math.floor(Math.min((this.data.get('val4') - 1) / 5,99))),0) , itemypos + layer16.y);
    }); 
    
    Phaser.Actions.GridAlign(backhairs.getChildren(), {
        width: 5,
        height: 5,
        cellWidth: 130,
        x: 54,
        y: this.game.renderer.height * 0.81
        });

});

})

    // Slot Icono 5
    let shirt_slot = this.add.image(75 * 5 + 80, this.game.renderer.height * 0.72, 'dress_icon5');
    shirt_slot.setInteractive();
    shirt_slot.setDepth(10);

    shirt_slot.on('pointerdown',()=>{
    this.assetdestroy.emit('destroy');

    iconoutline.setPosition  (-200 + 118 * 9, 0)

    // Remove Interactivity
    // Background (1)

    // ACC3 (2)
    layer2.removeInteractive();
    // BackHair (3)
    layer3.removeInteractive();
    // Doll (4)

    // Pants (5)
    layer5.removeInteractive();
    // Skirt (6)
    layer6.removeInteractive();
    // Eyes (7)
    layer7.removeInteractive();
    // Cejas (8)
    layer8.removeInteractive();
    // Dress - Top - Shirt (9)
    
    // Hairs (10)
    layer10.removeInteractive();
    // ACC1 (11)
    layer11.removeInteractive();
    // ACC2 (12)
    layer12.removeInteractive();

    tap4.play();
    
    up_arrow.setVisible(true);
    down_arrow.setVisible(true);


    // Casilla 5 -- Camisas --
    let shirts = this.add.group();
    shirts.createMultiple({ key: 'shirts', frame: [ 0,1,2,3 ], repeat: -1 });
    this.shirts = shirts;
    shirts.setDepth(11);

    let shirts_qty = 0;
    let shirts_pick = [shirt1, shirt2, shirt3, shirt4];
    layer16_qty = shirts_pick.length;
    layer16_y_cap = Number(Math.floor(shirts_pick.length / 5));

    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val5') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val5'),1)) + 130 * Math.max(this.data.get('val5')  - (1  +  5 * Math.floor(Math.min((this.data.get('val5') - 1) / 5,99))),0) , itemypos);
    frameout.setVisible(true);

    this.eventEmitter = new Phaser.Events.EventEmitter();
    this.eventEmitter.on('shirt_var', () => {
        
    this.data.set('shirt_var1', 0);
    this.data.set('shirt_var2', 0);
    this.data.set('shirt_var3', 0);
    this.data.set('shirt_var4', 0);

    let color_shirt = this.add.group({key:'white_dot', frameQuantity: this.var_qty});
    this.color_shirt = color_shirt; 
                
    Phaser.Actions.GridAlign(color_shirt.getChildren(), {
    width: 10,
    height: 10,
    cellWidth: 64,
    x: color_panel.x + 26,
    y: color_panel.y + 7
    });
            
    color_shirt.getChildren().forEach(child => {
    layer20.add(child);
    });
    });



    // Variacion de Color Shirt 1
    this.eventEmitter2 = new Phaser.Events.EventEmitter();
    this.eventEmitter2.on('shirt_var2', () => {
    if(this.data.get('val5') === 1){

    this.var_qty = 2;
    this.eventEmitter.emit('shirt_var');
    this.data.set('shirt_var1', 1 + Math.max(last_shirt1,0));

    let colorshirt_gph = this.color_shirt.getChildren();  

    colorshirt_gph[0].setTint(0x522733);
    colorshirt_gph[0].setInteractive();
    colorshirt_gph[0].on('pointerdown',()=>{
    shirt1.setTexture('shirt_1_1');
    this.data.set('shirt_var1', 1);
    this.data.set('shirt_var2', 0);
    this.data.set('shirt_var3', 0);
    this.data.set('shirt_var4', 0);
    last_shirt1 = 0;
    });

    colorshirt_gph[1].setTint(0x2F161D);
    colorshirt_gph[1].setInteractive();
    colorshirt_gph[1].on('pointerdown',()=>{
    shirt1.setTexture('shirt_1_2');
    this.data.set('shirt_var1', 2);
    this.data.set('shirt_var2', 0);
    this.data.set('shirt_var3', 0);
    this.data.set('shirt_var4', 0);
    last_shirt1 = 1;
    });
    }

    // Variacion de Color Shirt 2
    if(this.data.get('val5') === 2){

    this.var_qty = 2;
    this.eventEmitter.emit('shirt_var');
    this.data.set('shirt_var2', 1 + Math.max(last_shirt2,0));
    let colorshirt_gph = this.color_shirt.getChildren();  
    
    colorshirt_gph[0].setTint(0x290E16);
    colorshirt_gph[0].setInteractive();
    colorshirt_gph[0].on('pointerdown',()=>{
    shirt2.setTexture('shirt_2_1');
    this.data.set('shirt_var1', 0);
    this.data.set('shirt_var2', 1);
    this.data.set('shirt_var3', 0);
    this.data.set('shirt_var4', 0);
    last_shirt2 = 0;
    });
    
    colorshirt_gph[1].setTint(0xF2EBE2);
    colorshirt_gph[1].setInteractive();
    colorshirt_gph[1].on('pointerdown',()=>{
    shirt2.setTexture('shirt_2_2');
    this.data.set('shirt_var1', 0);
    this.data.set('shirt_var2', 2);
    this.data.set('shirt_var3', 0);
    this.data.set('shirt_var4', 0);
    last_shirt2 = 1;
    });
    }

    // Variacion de Color Shirt 3
    if(this.data.get('val5') === 3){

    this.var_qty = 3;
    this.eventEmitter.emit('shirt_var');
    this.data.set('shirt_var3', 1 + Math.max(last_shirt3,0));

    let colorshirt_gph = this.color_shirt.getChildren();  
        
    colorshirt_gph[0].setTint(0x290E16);
    colorshirt_gph[0].setInteractive();
    colorshirt_gph[0].on('pointerdown',()=>{
    shirt3.setTexture('shirt_3_1');
    this.data.set('shirt_var1', 0);
    this.data.set('shirt_var2', 0);
    this.data.set('shirt_var3', 1);
    this.data.set('shirt_var4', 0);
    last_shirt3 = 0;
    });
        
    colorshirt_gph[1].setTint(0x5B2D2D);
    colorshirt_gph[1].setInteractive();
    colorshirt_gph[1].on('pointerdown',()=>{
    shirt3.setTexture('shirt_3_2');
    this.data.set('shirt_var1', 0);
    this.data.set('shirt_var2', 0);
    this.data.set('shirt_var3', 2);
    this.data.set('shirt_var4', 0);
    last_shirt3 = 1;
    });

    colorshirt_gph[2].setTint(0xE0B3AA);
    colorshirt_gph[2].setInteractive();
    colorshirt_gph[2].on('pointerdown',()=>{
    shirt3.setTexture('shirt_3_3');
    this.data.set('shirt_var1', 0);
    this.data.set('shirt_var2', 0);
    this.data.set('shirt_var3', 3);
    this.data.set('shirt_var4', 0);
    last_shirt3 = 2;
    });
    }

    // Variacion de Color Shirt 4
    if(this.data.get('val5') === 4){

    this.var_qty = 4;
    this.eventEmitter.emit('shirt_var');
    this.data.set('shirt_var4', 1 + Math.max(last_shirt4,0));
    let colorshirt_gph = this.color_shirt.getChildren();  
            
    colorshirt_gph[0].setTint(0x986C71);
    colorshirt_gph[0].setInteractive();
    colorshirt_gph[0].on('pointerdown',()=>{
    shirt4.setTexture('shirt_4_1');
    this.data.set('shirt_var1', 0);
    this.data.set('shirt_var2', 0);
    this.data.set('shirt_var3', 0);
    this.data.set('shirt_var4', 1);
    last_shirt4 = 0;
    });
            
    colorshirt_gph[1].setTint(0x99202C);
    colorshirt_gph[1].setInteractive();
    colorshirt_gph[1].on('pointerdown',()=>{
    shirt4.setTexture('shirt_4_2');
    this.data.set('shirt_var1', 0);
    this.data.set('shirt_var2', 0);
    this.data.set('shirt_var3', 0);
    this.data.set('shirt_var4', 2);
    last_shirt4 = 1;
    });
    
    colorshirt_gph[2].setTint(0xDB6A3B);
    colorshirt_gph[2].setInteractive();
    colorshirt_gph[2].on('pointerdown',()=>{
    shirt4.setTexture('shirt_4_3');
    this.data.set('shirt_var1', 0);
    this.data.set('shirt_var2', 0);
    this.data.set('shirt_var3', 0);
    this.data.set('shirt_var4', 3);
    last_shirt4 = 2;
    });

    colorshirt_gph[3].setTint(0xDFB2A9);
    colorshirt_gph[3].setInteractive();
    colorshirt_gph[3].on('pointerdown',()=>{
    shirt4.setTexture('shirt_4_4');
    this.data.set('shirt_var1', 0);
    this.data.set('shirt_var2', 0);
    this.data.set('shirt_var3', 0);
    this.data.set('shirt_var4', 4);
    last_shirt4 = 3;
    });
    }
    });
    this.eventEmitter2.emit('shirt_var2');

    shirts.getChildren().forEach(child => {
    layer16.add(child);
    child.setInteractive();
    shirts_qty++;
    child.id = shirts_qty;

    child.on('pointerdown',()=>{

    this.color_shirt.destroy(true);

    tap2.play();

    this.data.set('val5',0);

    layer9.remove([
    shirt1.setPosition(-800,-400), shirt2.setPosition(-800,-400), shirt3.setPosition(-800,-400), shirt4.setPosition(-800,-400),
    ])
        
    if(this.data.get('shirt' + child.id) === 0){

    let i = 0;
    shirts.getChildren().forEach(child => {
    i++;
    this.data.set('shirt' + i, 0);
    })

    let child_id = Number(child.id - 1);
    layer9.setPosition(layerxpos, layerypos);
    layer9.add([
    shirts_pick[child_id].setPosition(0,0)
    ])
    this.data.set('val5', child.id);
    this.data.set('shirt' + child.id, 1);
    frameout.setVisible(true);
    }

    else if(this.data.get('shirt' + child.id) === 1){

    let i = 0;
    shirts.getChildren().forEach(child => {
    i++;
    this.data.set('shirt' + i, 0);
    })
    
    layer9.setPosition(layerxpos, layerypos);
    layer9.add([
    shirt1.setPosition(0,0)
    ])
    this.data.set('val5', 1);
    this.data.set('shirt1', 1);

    // this.data.set('shirt' + child.id, 0);
    // frameout.setVisible(false);
    }

    this.eventEmitter2.emit('shirt_var2');


    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val5') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val5'),1)) + 130 * Math.max(this.data.get('val5')  - (1  +  5 * Math.floor(Math.min((this.data.get('val5') - 1) / 5,99))),0) , itemypos + layer16.y);
    });
    });

    Phaser.Actions.GridAlign(shirts.getChildren(), {
        width: 5,
        height: 5,
        cellWidth: 130,
        x: 54,
        y: this.game.renderer.height * 0.81
    });
})

    // Slot Icono 6
    let skirt_slot = this.add.image(75 * 6 + 100, this.game.renderer.height * 0.72, 'dress_icon6');
    skirt_slot.setInteractive();
    skirt_slot.setDepth(10);

    skirt_slot.on('pointerdown',()=>{
    this.assetdestroy.emit('destroy');

    iconoutline.setPosition  (-200 + 118 * 10, 0)

    // Remove Interactivity
    // Background (1)

    // ACC3 (2)
    layer2.removeInteractive();
    // BackHair (3)
    layer3.removeInteractive();
    // Doll (4)

    // Pants (5)
    layer5.removeInteractive();
    // Skirt (6)
    
    // Eyes (7)
    layer7.removeInteractive();
    // Cejas (8)
    layer8.removeInteractive();
    // Dress - Top - Shirt (9)
    layer9.removeInteractive();
    // Hairs (10)
    layer10.removeInteractive();
    // ACC1 (11)
    layer11.removeInteractive();
    // ACC2 (12)
    layer12.removeInteractive();

    tap4.play();
    up_arrow.setVisible(false);
    down_arrow.setVisible(false);

    // Casilla 6 -- Faldas --
    let skirts = this.add.group();
    skirts.createMultiple({ key: 'skirts', frame: [ 0,1,2 ], repeat: -1 });
    this.skirts = skirts;
    skirts.setDepth(11);

    let skirts_qty = 0;
    let skirts_pick = [skirt1, skirt2, skirt3];
    layer16_qty = skirts_pick.length;
    layer16_y_cap = Number(Math.floor(skirts_pick.length / 5));
    layer16.setVisible(true);
    layer16.y = 0;
    tap4.play();
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val6') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val6'),1)) + 130 * Math.max(this.data.get('val6')  - (1  +  5 * Math.floor(Math.min((this.data.get('val6') - 1) / 5,99))),0) , itemypos);
    

    this.skirtEmitter = new Phaser.Events.EventEmitter();
    this.skirtEmitter.on('skirt_var', () => {
        
    this.data.set('skirt_var1', 0);
    this.data.set('skirt_var2', 0);
    this.data.set('skirt_var3', 0);
    this.data.set('skirt_var4', 0);

    let color_skirt = this.add.group({key:'white_dot', frameQuantity: this.var_qty});
    this.color_skirt = color_skirt; 
                
    Phaser.Actions.GridAlign(color_skirt.getChildren(), {
    width: 10,
    height: 10,
    cellWidth: 64,
    x: color_panel.x + 26,
    y: color_panel.y + 7
    });
            
    color_skirt.getChildren().forEach(child => {
    layer20.add(child);
    });
    });



    // Variacion de Color Skirt 1
    this.skirtEmitter2 = new Phaser.Events.EventEmitter();
    this.skirtEmitter2.on('skirt_var2', () => {
    if(this.data.get('val6') === 1){

    this.var_qty = 9;
    this.skirtEmitter.emit('skirt_var');
    this.data.set('skirt_var1', 1 + Math.max(last_skirt1,0));

    let colorskirt_gph = this.color_skirt.getChildren();  

    colorskirt_gph[0].setTint(0xE0B3AA);
    colorskirt_gph[0].setInteractive();
    colorskirt_gph[0].on('pointerdown',()=>{
    skirt1.setTexture('skirt_1_1');
    this.data.set('skirt_var1', 1);
    this.data.set('skirt_var2', 0);
    this.data.set('skirt_var3', 0);
    last_skirt1 = 0;
    });

    colorskirt_gph[1].setTint(0xDDCDCA);
    colorskirt_gph[1].setInteractive();
    colorskirt_gph[1].on('pointerdown',()=>{
    skirt1.setTexture('skirt_1_2');
    this.data.set('skirt_var1', 2);
    this.data.set('skirt_var2', 0);
    this.data.set('skirt_var3', 0);
    last_skirt1 = 1;
    });

    colorskirt_gph[2].setTint(0xDDCDC9);
    colorskirt_gph[2].setInteractive();
    colorskirt_gph[2].on('pointerdown',()=>{
    skirt1.setTexture('skirt_1_3');
    this.data.set('skirt_var1', 3);
    this.data.set('skirt_var2', 0);
    this.data.set('skirt_var3', 0);
    last_skirt1 = 2;
    });

    colorskirt_gph[3].setTint(0x3A5177);
    colorskirt_gph[3].setInteractive();
    colorskirt_gph[3].on('pointerdown',()=>{
    skirt1.setTexture('skirt_1_4');
    this.data.set('skirt_var1', 4);
    this.data.set('skirt_var2', 0);
    this.data.set('skirt_var3', 0);
    last_skirt1 = 3;
    });

    colorskirt_gph[4].setTint(0xA7140F);
    colorskirt_gph[4].setInteractive();
    colorskirt_gph[4].on('pointerdown',()=>{
    skirt1.setTexture('skirt_1_5');
    this.data.set('skirt_var1', 5);
    this.data.set('skirt_var2', 0);
    this.data.set('skirt_var3', 0);
    last_skirt1 = 4;
    });

    colorskirt_gph[5].setTint(0xDC6A3B);
    colorskirt_gph[5].setInteractive();
    colorskirt_gph[5].on('pointerdown',()=>{
    skirt1.setTexture('skirt_1_6');
    this.data.set('skirt_var1', 6);
    this.data.set('skirt_var2', 0);
    this.data.set('skirt_var3', 0);
    last_skirt1 = 5;
    });

    colorskirt_gph[6].setTint(0x290D15);
    colorskirt_gph[6].setInteractive();
    colorskirt_gph[6].on('pointerdown',()=>{
    skirt1.setTexture('skirt_1_7');
    this.data.set('skirt_var1', 7);
    this.data.set('skirt_var2', 0);
    this.data.set('skirt_var3', 0);
    last_skirt1 = 6;
    });

    colorskirt_gph[7].setTint(0xE1B3AA);
    colorskirt_gph[7].setInteractive();
    colorskirt_gph[7].on('pointerdown',()=>{
    skirt1.setTexture('skirt_1_8');
    this.data.set('skirt_var1', 8);
    this.data.set('skirt_var2', 0);
    this.data.set('skirt_var3', 0);
    last_skirt1 = 7;
    });

    colorskirt_gph[8].setTint(0x2A0F17);
    colorskirt_gph[8].setInteractive();
    colorskirt_gph[8].on('pointerdown',()=>{
    skirt1.setTexture('skirt_1_9');
    this.data.set('skirt_var1', 9);
    this.data.set('skirt_var2', 0);
    this.data.set('skirt_var3', 0);
    last_skirt1 = 8;
    });
    }

    // Variacion de Color Skirt 2
    if(this.data.get('val6') === 2){

    this.var_qty = 9;
    this.skirtEmitter.emit('skirt_var');
    this.data.set('skirt_var2', 1 + Math.max(last_skirt2,0));
    let colorskirt_gph = this.color_skirt.getChildren();  
    
    colorskirt_gph[0].setTint(0x866261);
    colorskirt_gph[0].setInteractive();
    colorskirt_gph[0].on('pointerdown',()=>{
    skirt2.setTexture('skirt_2_1');
    this.data.set('skirt_var1', 0);
    this.data.set('skirt_var2', 1);
    this.data.set('skirt_var3', 0);
    last_skirt2 = 0;
    });
    
    colorskirt_gph[1].setTint(0xE1B4AA);
    colorskirt_gph[1].setInteractive();
    colorskirt_gph[1].on('pointerdown',()=>{
    skirt2.setTexture('skirt_2_2');
    this.data.set('skirt_var1', 0);
    this.data.set('skirt_var2', 2);
    this.data.set('skirt_var3', 0);
    last_skirt2 = 1;
    });

    colorskirt_gph[2].setTint(0x846060);
    colorskirt_gph[2].setInteractive();
    colorskirt_gph[2].on('pointerdown',()=>{
    skirt2.setTexture('skirt_2_3');
    this.data.set('skirt_var1', 0);
    this.data.set('skirt_var2', 3);
    this.data.set('skirt_var3', 0);
    last_skirt2 = 2;
    });

    colorskirt_gph[3].setTint(0xDFA397);
    colorskirt_gph[3].setInteractive();
    colorskirt_gph[3].on('pointerdown',()=>{
    skirt2.setTexture('skirt_2_4');
    this.data.set('skirt_var1', 0);
    this.data.set('skirt_var2', 4);
    this.data.set('skirt_var3', 0);
    last_skirt2 = 3;
    });

    colorskirt_gph[4].setTint(0xDFB2A9);
    colorskirt_gph[4].setInteractive();
    colorskirt_gph[4].on('pointerdown',()=>{
    skirt2.setTexture('skirt_2_5');
    this.data.set('skirt_var1', 0);
    this.data.set('skirt_var2', 5);
    this.data.set('skirt_var3', 0);
    last_skirt2 = 4;
    });

    colorskirt_gph[5].setTint(0x2A0F17);
    colorskirt_gph[5].setInteractive();
    colorskirt_gph[5].on('pointerdown',()=>{
    skirt2.setTexture('skirt_2_6');
    this.data.set('skirt_var1', 0);
    this.data.set('skirt_var2', 6);
    this.data.set('skirt_var3', 0);
    last_skirt2 = 5;
    });

    
    colorskirt_gph[6].setTint(0xAF2822);
    colorskirt_gph[6].setInteractive();
    colorskirt_gph[6].on('pointerdown',()=>{
    skirt2.setTexture('skirt_2_7');
    this.data.set('skirt_var1', 0);
    this.data.set('skirt_var2', 7);
    this.data.set('skirt_var3', 0);
    last_skirt2 = 6;
    });

    colorskirt_gph[7].setTint(0xA7140F);
    colorskirt_gph[7].setInteractive();
    colorskirt_gph[7].on('pointerdown',()=>{
    skirt2.setTexture('skirt_2_8');
    this.data.set('skirt_var1', 0);
    this.data.set('skirt_var2', 8);
    this.data.set('skirt_var3', 0);
    last_skirt2 = 7;
    });

    colorskirt_gph[8].setTint(0xA7140F);
    colorskirt_gph[8].setInteractive();
    colorskirt_gph[8].on('pointerdown',()=>{
    skirt2.setTexture('skirt_2_9');
    this.data.set('skirt_var1', 0);
    this.data.set('skirt_var2', 9);
    this.data.set('skirt_var3', 0);
    last_skirt2 = 8;
    });

    }

    // Variacion de Color Skirt 3
    if(this.data.get('val6') === 3){

    this.var_qty = 2;
    this.skirtEmitter.emit('skirt_var');
    this.data.set('skirt_var3', 1 + Math.max(last_skirt3,0));

    let colorskirt_gph = this.color_skirt.getChildren();  
        
    colorskirt_gph[0].setTint(0xE0B3AA);
    colorskirt_gph[0].setInteractive();
    colorskirt_gph[0].on('pointerdown',()=>{
    skirt3.setTexture('skirt_3_1');
    this.data.set('skirt_var1', 0);
    this.data.set('skirt_var2', 0);
    this.data.set('skirt_var3', 1);
    last_skirt3 = 0;
    });
        
    colorskirt_gph[1].setTint(0x290E16);
    colorskirt_gph[1].setInteractive();
    colorskirt_gph[1].on('pointerdown',()=>{
    skirt3.setTexture('skirt_3_2');
    this.data.set('skirt_var1', 0);
    this.data.set('skirt_var2', 0);
    this.data.set('skirt_var3', 2);
    last_skirt3 = 1;
    });
    }
    });
    
    this.skirtEmitter2.emit('skirt_var2');


    skirts.getChildren().forEach(child => {
    layer16.add(child);
    child.setInteractive();
    skirts_qty++;
    child.id = skirts_qty;
    
    // Trigger
    child.on('pointerdown',()=>{
    
    tap2.play();
    this.color_skirt.destroy(true);
    
    // Remove all Images
    this.data.set('val6',0);
    layer5.remove([
    skirt1.setPosition(-800,-400),skirt2.setPosition(-800,-400), skirt3.setPosition(-800,-400)
    ])
            
    // If not selected before, add image
    if(this.data.get('skirt' + child.id) === 0){
    let i = 0;
    skirts.getChildren().forEach(child => {
    i++;
    this.data.set('skirt' + i, 0);
    })
    
    let child_id = Number(child.id - 1);
    layer5.setPosition(layerxpos, layerypos);
    layer5.add([
    skirts_pick[child_id].setPosition(0,0)
    ])
    this.data.set('val6', child.id);
    this.data.set('skirt' + child.id, 1);
    frameout.setVisible(true);
    }
    
    // If selected before, remove image 
    // Nuevo => Hacer que ponga la imagen 1 como default
    else if(this.data.get('skirt' + child.id) === 1){
    this.data.set('skirt' + child.id, 0);
    frameout.setVisible(false);
    }
        

    this.skirtEmitter2.emit('skirt_var2');
    // Select Outline new Position
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val6') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val6'),1)) + 130 * Math.max(this.data.get('val6')  - (1  +  5 * Math.floor(Math.min((this.data.get('val6') - 1) / 5,99))),0) , itemypos + layer16.y);
    
    });    
});
    
    Phaser.Actions.GridAlign(skirts.getChildren(), {
    width: 5,
    height: 5,
    cellWidth: 130,
    x: 54,
    y: this.game.renderer.height * 0.81
    });
})

    // Slot Icono 7
    let pants_slot = this.add.image(75 * 7 + 120, this.game.renderer.height * 0.72, 'dress_icon7');
    pants_slot.setInteractive();
    pants_slot.setDepth(10);
    
    pants_slot.on('pointerdown',()=>{
    this.assetdestroy.emit('destroy');

    iconoutline.setPosition  (-200 + 118 * 11, 0)

    // Remove Interactivity
    // Background (1)

    // ACC3 (2)
    layer2.removeInteractive();
    // BackHair (3)
    layer3.removeInteractive();
    // Doll (4)

    // Pants (5)
    
    // Skirt (6)
    layer6.removeInteractive();
    // Eyes (7)
    layer7.removeInteractive();
    // Cejas (8)
    layer8.removeInteractive();
    // Dress - Top - Shirt (9)
    layer9.removeInteractive();
    // Hairs (10)
    layer10.removeInteractive();
    // ACC1 (11)
    layer11.removeInteractive();
    // ACC2 (12)
    layer12.removeInteractive();


    // if(this.data.get('val7') != 0){
    // layer5.setInteractive();
    // this.input.setDraggable(layer5);
    // }else if(this.data.get('val7') === 0){
    // layer5.removeInteractive();
    // }

    tap4.play();
    up_arrow.setVisible(true);
    down_arrow.setVisible(true);

    // Casilla 7 -- Pantalones --

    let pants = this.add.group();
    pants.createMultiple({ key: 'pants', frame: [ 0,1,2,3], repeat: -1 });
    this.pants = pants;
    pants.setDepth(11);

    let pants_qty = 0;
    let pants_pick = [pants1, pants2, pants3, pants4];
    layer16_qty = pants_pick.length;
    layer16_y_cap = Number(Math.floor(pants_pick.length / 5));
    layer16.setVisible(true);
    layer16.y = 0;
    tap4.play();
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val7') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val7'),1)) + 130 * Math.max(this.data.get('val7')  - (1  +  5 * Math.floor(Math.min((this.data.get('val7') - 1) / 5,99))),0) , itemypos);
    

    this.pantsEmitter = new Phaser.Events.EventEmitter();
    this.pantsEmitter.on('pants_var', () => {
        
    this.data.set('pants_var1', 0);
    this.data.set('pants_var2', 0);
    this.data.set('pants_var3', 0);
    this.data.set('pants_var4', 0);

    let color_pants = this.add.group({key:'white_dot', frameQuantity: this.var_qty});
    this.color_pants = color_pants; 
                
    Phaser.Actions.GridAlign(color_pants.getChildren(), {
    width: 10,
    height: 10,
    cellWidth: 64,
    x: color_panel.x + 26,
    y: color_panel.y + 7
    });
            
    color_pants.getChildren().forEach(child => {
    layer20.add(child);
    });
    });



    // Variacion de Color Pants 1
    this.pantsEmitter2 = new Phaser.Events.EventEmitter();
    this.pantsEmitter2.on('pants_var2', () => {
    if(this.data.get('val7') === 1){

    this.var_qty = 2;
    this.pantsEmitter.emit('pants_var');
    this.data.set('pants_var1', 1 + Math.max(last_pants1,0));

    let colorpants_gph = this.color_pants.getChildren();  

    colorpants_gph[0].setTint(0x522733);
    colorpants_gph[0].setInteractive();
    colorpants_gph[0].on('pointerdown',()=>{
    pants1.setTexture('pants_1_1');
    this.data.set('pants_var1', 1);
    this.data.set('pants_var2', 0);
    this.data.set('pants_var3', 0);
    this.data.set('pants_var4', 0);
    last_pants1 = 0;
    });

    colorpants_gph[1].setTint(0x291319);
    colorpants_gph[1].setInteractive();
    colorpants_gph[1].on('pointerdown',()=>{
    pants1.setTexture('pants_1_2');
    this.data.set('pants_var1', 2);
    this.data.set('pants_var2', 0);
    this.data.set('pants_var3', 0);
    this.data.set('pants_var4', 0);
    last_pants1 = 1;
    });
    }

    // Variacion de Color Pants 2
    if(this.data.get('val7') === 2){

    this.var_qty = 3;
    this.pantsEmitter.emit('pants_var');
    this.data.set('pants_var2', 1 + Math.max(last_pants2,0));
    let colorpants_gph = this.color_pants.getChildren();  
    
    colorpants_gph[0].setTint(0xA7140F);
    colorpants_gph[0].setInteractive();
    colorpants_gph[0].on('pointerdown',()=>{
    pants2.setTexture('pants_2_1');
    this.data.set('pants_var1', 0);
    this.data.set('pants_var2', 1);
    this.data.set('pants_var3', 0);
    this.data.set('pants_var4', 0);
    last_pants2 = 0;
    });
    
    colorpants_gph[1].setTint(0x3A5177);
    colorpants_gph[1].setInteractive();
    colorpants_gph[1].on('pointerdown',()=>{
    pants2.setTexture('pants_2_2');
    this.data.set('pants_var1', 0);
    this.data.set('pants_var2', 2);
    this.data.set('pants_var3', 0);
    this.data.set('pants_var4', 0);
    last_pants2 = 1;
    });

    colorpants_gph[2].setTint(0xDC6A3B);
    colorpants_gph[2].setInteractive();
    colorpants_gph[2].on('pointerdown',()=>{
    pants2.setTexture('pants_2_3');
    this.data.set('pants_var1', 0);
    this.data.set('pants_var2', 3);
    this.data.set('pants_var3', 0);
    this.data.set('pants_var4', 0);
    last_pants2 = 2;
    });

    }

    // Variacion de Color Pants 3
    if(this.data.get('val7') === 3){

    this.var_qty = 4;
    this.pantsEmitter.emit('pants_var');
    this.data.set('pants_var3', 1 + Math.max(last_pants3,0));

    let colorpants_gph = this.color_pants.getChildren();  
        
    colorpants_gph[0].setTint(0x290E16);
    colorpants_gph[0].setInteractive();
    colorpants_gph[0].on('pointerdown',()=>{
    pants3.setTexture('pants_3_1');
    this.data.set('pants_var1', 0);
    this.data.set('pants_var2', 0);
    this.data.set('pants_var3', 1);
    this.data.set('pants_var4', 0);
    last_pants3 = 0;
    });
        
    colorpants_gph[1].setTint(0xA6140F);
    colorpants_gph[1].setInteractive();
    colorpants_gph[1].on('pointerdown',()=>{
    pants3.setTexture('pants_3_2');
    this.data.set('pants_var1', 0);
    this.data.set('pants_var2', 0);
    this.data.set('pants_var3', 2);
    this.data.set('pants_var4', 0);
    last_pants3 = 1;
    });

    colorpants_gph[2].setTint(0x992631);
    colorpants_gph[2].setInteractive();
    colorpants_gph[2].on('pointerdown',()=>{
    pants3.setTexture('pants_3_3');
    this.data.set('pants_var1', 0);
    this.data.set('pants_var2', 0);
    this.data.set('pants_var3', 3);
    this.data.set('pants_var4', 0);
    last_pants3 = 2;
    });

    colorpants_gph[3].setTint(0xDFB2A9);
    colorpants_gph[3].setInteractive();
    colorpants_gph[3].on('pointerdown',()=>{
    pants3.setTexture('pants_3_4');
    this.data.set('pants_var1', 0);
    this.data.set('pants_var2', 0);
    this.data.set('pants_var3', 4);
    this.data.set('pants_var4', 0);
    last_pants3 = 3;
    });
    }

    // Variacion de Color Pants 4
    if(this.data.get('val7') === 4){

    this.var_qty = 4;
    this.pantsEmitter.emit('pants_var');
    this.data.set('pants_var4', 1 + Math.max(last_pants4,0));
    let colorpants_gph = this.color_pants.getChildren();  
            
    colorpants_gph[0].setTint(0x936E72);
    colorpants_gph[0].setInteractive();
    colorpants_gph[0].on('pointerdown',()=>{
    pants4.setTexture('pants_4_1');
    this.data.set('pants_var1', 0);
    this.data.set('pants_var2', 0);
    this.data.set('pants_var3', 0);
    this.data.set('pants_var4', 1);
    last_pants4 = 0;
    });
            
    colorpants_gph[1].setTint(0x9D8182);
    colorpants_gph[1].setInteractive();
    colorpants_gph[1].on('pointerdown',()=>{
    pants4.setTexture('pants_4_2');
    this.data.set('pants_var1', 0);
    this.data.set('pants_var2', 0);
    this.data.set('pants_var3', 0);
    this.data.set('pants_var4', 2);
    last_pants4 = 1;
    });
    
    colorpants_gph[2].setTint(0xDFB2A9);
    colorpants_gph[2].setInteractive();
    colorpants_gph[2].on('pointerdown',()=>{
    pants4.setTexture('pants_4_3');
    this.data.set('pants_var1', 0);
    this.data.set('pants_var2', 0);
    this.data.set('pants_var3', 0);
    this.data.set('pants_var4', 3);
    last_pants4 = 2;
    });

    colorpants_gph[3].setTint(0x3A5177);
    colorpants_gph[3].setInteractive();
    colorpants_gph[3].on('pointerdown',()=>{
    pants4.setTexture('pants_4_4');
    this.data.set('pants_var1', 0);
    this.data.set('pants_var2', 0);
    this.data.set('pants_var3', 0);
    this.data.set('pants_var4', 4);
    last_pants4 = 3;
    });
    }
    });
    this.pantsEmitter2.emit('pants_var2');


    pants.getChildren().forEach(child => {
    layer16.add(child);
    child.setInteractive();
    pants_qty++;
    child.id = pants_qty;

    // Trigger
    child.on('pointerdown',()=>{
    
    this.color_pants.destroy(true);
    tap2.play();
    
    // Remove all Images
    this.data.set('val7',0);
    layer6.remove([
    pants1.setPosition(-800,-400),pants2.setPosition(-800,-400), pants3.setPosition(-800,-400), pants4.setPosition(-800,-400),
    ])
            
    // If not selected before, add image
    if(this.data.get('pants' + child.id) === 0){
    let i = 0;
    pants.getChildren().forEach(child => {
    i++;
    this.data.set('pants' + i, 0);
    })
    
    let child_id = Number(child.id - 1);
    layer6.setPosition(layerxpos, layerypos);
    layer6.add([
    pants_pick[child_id].setPosition(0,0)
    ])
    this.data.set('val7', child.id);
    this.data.set('pants' + child.id, 1);
    frameout.setVisible(true);
    }
    
    // If selected before, remove image 
    // Nuevo => Hacer que ponga la imagen 1 como default
    else if(this.data.get('pants' + child.id) === 1){

    let i = 0;
    pants.getChildren().forEach(child => {
    i++;
    this.data.set('pants' + i, 0);
    })
        
    layer6.setPosition(layerxpos, layerypos);
    layer6.add([
    pants1.setPosition(0,0)
    ])
    this.data.set('val7', 1);
    this.data.set('pants1', 1);

    // this.data.set('pants' + child.id, 0);
    // frameout.setVisible(false);
    }

    this.pantsEmitter2.emit('pants_var2');
    // Select Outline new Position
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val7') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val7'),1)) + 130 * Math.max(this.data.get('val7')  - (1  +  5 * Math.floor(Math.min((this.data.get('val7') - 1) / 5,99))),0) , itemypos + layer16.y);
    
    });    
});
    
        Phaser.Actions.GridAlign(pants.getChildren(), {
        width: 5,
        height: 5,
        cellWidth: 130,
        x: 54,
        y: this.game.renderer.height * 0.81
    });
})

    // Slot Icono 8 --HAIR STRANS--
    let acc1_slot = this.add.image(75 * 8 + 140, this.game.renderer.height * 0.72, 'dress_icon8');
    acc1_slot.setInteractive();
    acc1_slot.setDepth(10);
            
    acc1_slot.on('pointerdown',()=>{
    this.assetdestroy.emit('destroy');

    iconoutline.setPosition  (-200 + 118 * 8, 0)
    // ACC3 (2)
    layer2.removeInteractive();
    // BackHair (3)
    layer3.removeInteractive();
    // Doll (4)
    // Pants (5)
    layer5.removeInteractive();
    // Skirt (6)
    layer6.removeInteractive();
    // Eyes (7)
    layer7.removeInteractive();
    // Cejas (8)
    layer8.removeInteractive();
    // Dress - Top - Shirt (9)
    layer9.removeInteractive();
    // Hairs (10)
    layer10.removeInteractive();
    // ACC2 (12)
    layer12.removeInteractive();

    tap4.play();
    up_arrow.setVisible(false);
    down_arrow.setVisible(false);

     // Casilla 8 -- STRANS --
     
    let acc1 = this.add.group();
    acc1.createMultiple({ key: 'acc1', frame: [ 0 ], repeat: -1 });
    this.acc1 = acc1;
    acc1.setDepth(11);

    let acc1_qty = 0;
    let acc1_pick = [acc1_1];
    layer16_qty = acc1_pick.length;
    layer16_y_cap = Number(Math.floor(acc1_pick.length / 5));
    layer16.setVisible(true);
    layer16.y = 0;
    tap4.play();
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val8') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val8'),1)) + 130 * Math.max(this.data.get('val8')  - (1  +  5 * Math.floor(Math.min((this.data.get('val8') - 1) / 5,99))),0) , itemypos);
    
    acc1.getChildren().forEach(child => {
    layer16.add(child);
    child.setInteractive();
    acc1_qty++;
    child.id = acc1_qty;
    
    // Trigger
    child.on('pointerdown',()=>{
    
    tap2.play();
    
    // Remove all Images
    this.data.set('val8',0);
    layer18.remove([
    acc1_1.setPosition(-800,-400),
    ])
            
    // If not selected before, add image
    if(this.data.get('acc1_' + child.id) === 0){
    let i = 0;
    acc1.getChildren().forEach(child => {
    i++;
    this.data.set('acc1_' + i, 0);
    })
    
    let child_id = Number(child.id - 1);
    layer18.setPosition(layerxpos, layerypos);
    layer18.add([
    acc1_pick[child_id].setPosition(0,0)
    ])
    this.data.set('val8', child.id);
    this.data.set('acc1_' + child.id, 1);
    frameout.setVisible(true);
    }
    
    // If selected before, remove image 
    // Nuevo => Hacer que ponga la imagen 1 como default
    else if(this.data.get('acc1_' + child.id) === 1){
    this.data.set('acc1_' + child.id, 0);
    frameout.setVisible(false);
    }
        
    // Select Outline new Position
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val8') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val8'),1)) + 130 * Math.max(this.data.get('val8')  - (1  +  5 * Math.floor(Math.min((this.data.get('val8') - 1) / 5,99))),0) , itemypos + layer16.y);
    
    });    
});
    
        Phaser.Actions.GridAlign(acc1.getChildren(), {
        width: 5,
        height: 5,
        cellWidth: 130,
        x: 54,
        y: this.game.renderer.height * 0.81
    });
})

    // Slot Icono 9
    let acc2_slot = this.add.image(75 * 9 + 160, this.game.renderer.height * 0.72, 'dress_icon9');
    acc2_slot.setInteractive();
    acc2_slot.setDepth(10);
            
    acc2_slot.on('pointerdown',()=>{
    this.assetdestroy.emit('destroy');

    iconoutline.setPosition  (-200 + 118 * 13, 0)

    // ACC3 (2)
    layer2.removeInteractive();
    // BackHair (3)
    layer3.removeInteractive();
    // Pants (5)
    layer5.removeInteractive();
    // Skirt (6)
    layer6.removeInteractive();
    // Eyes (7)
    layer7.removeInteractive();
    // Cejas (8)
    layer8.removeInteractive();
    // Dress - Top - Shirt (9)
    layer9.removeInteractive();
    // Hairs (10)
    layer10.removeInteractive();
    // ACC1 (11)
    layer11.removeInteractive();
    // ACC2 (12)
    
    tap4.play();
    up_arrow.setVisible(false);
    down_arrow.setVisible(false);

    // Casilla 9 -- Accesorios 2 --
    let acc2 = this.add.group();
    acc2.createMultiple({ key: 'acc2', frame: [ 0,1,2 ], repeat: -1 });
    this.acc2 = acc2;
    acc2.setDepth(11);

    let acc2_qty = 0;
    let acc2_pick = [acc2_1, acc2_2, acc2_3];
    layer16_qty = acc2_pick.length;
    layer16_y_cap = Number(Math.floor(acc2_pick.length / 5));
    layer16.setVisible(true);
    layer16.y = 0;
    tap4.play();
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val9') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val9'),1)) + 130 * Math.max(this.data.get('val9')  - (1  +  5 * Math.floor(Math.min((this.data.get('val9') - 1) / 5,99))),0) , itemypos);
    

    this.acc2Emitter = new Phaser.Events.EventEmitter();
    this.acc2Emitter.on('acc2_var', () => {
        
    this.data.set('acc2_var1', 0);
    this.data.set('acc2_var2', 0);
    this.data.set('acc2_var3', 0);

    let color_acc2 = this.add.group({key:'white_dot', frameQuantity: this.var_qty});
    this.color_acc2 = color_acc2; 
                
    Phaser.Actions.GridAlign(color_acc2.getChildren(), {
    width: 10,
    height: 10,
    cellWidth: 64,
    x: color_panel.x + 26,
    y: color_panel.y + 7
    });
            
    color_acc2.getChildren().forEach(child => {
    layer20.add(child);
    });
    });


    // Variacion de Color ACC2 (1)
    this.acc2Emitter2 = new Phaser.Events.EventEmitter();
    this.acc2Emitter2.on('acc2_var2', () => {
    if(this.data.get('val9') === 1){

    this.var_qty = 2;
    this.acc2Emitter.emit('acc2_var');
    this.data.set('acc2_var1', 1 + Math.max(last_acc2_1,0));

    let coloracc2_gph = this.color_acc2.getChildren();  

    coloracc2_gph[0].setTint(0x522733);
    coloracc2_gph[0].setInteractive();
    coloracc2_gph[0].on('pointerdown',()=>{
    acc2_1.setTexture('acc2_1_1');
    this.data.set('acc2_var1', 1);
    this.data.set('acc2_var2', 0);
    this.data.set('acc2_var3', 0);
    last_acc2_1 = 0;
    });

    coloracc2_gph[1].setTint(0x291319);
    coloracc2_gph[1].setInteractive();
    coloracc2_gph[1].on('pointerdown',()=>{
    acc2_1.setTexture('acc2_1_2');
    this.data.set('acc2_var1', 2);
    this.data.set('acc2_var2', 0);
    this.data.set('acc2_var3', 0);
    last_acc2_1 = 1;
    });
    }

    // Variacion de Color Pants 2
    if(this.data.get('val9') === 2){

    this.data.set('acc2_var1', 0);
    this.data.set('acc2_var2', 1);
    this.data.set('acc2_var3', 0);
    last_acc2_2 = 0;

    // this.var_qty = 3;
    // this.acc2Emitter.emit('acc2_var');
    // this.data.set('acc2_var2', 1 + Math.max(last_acc2_2,0));
    // let coloracc2_gph = this.color_acc2.getChildren();  
    
    // coloracc2_gph[0].setTint(0xA7140F);
    // coloracc2_gph[0].setInteractive();
    // coloracc2_gph[0].on('pointerdown',()=>{
    // acc2_2.setTexture('acc2_2_1');
    // this.data.set('acc2_var1', 0);
    // this.data.set('acc2_var2', 1);
    // this.data.set('acc2_var3', 0);
    // this.data.set('acc2_var4', 0);
    // last_acc2_2 = 0;
    // });
    }

    // Variacion de Color Pants 3
    if(this.data.get('val9') === 3){

    this.var_qty = 4;
    this.acc2Emitter.emit('acc2_var');
    this.data.set('acc2_var3', 1 + Math.max(last_acc2_3,0));

    let coloracc2_gph = this.color_acc2.getChildren();  
        
    coloracc2_gph[0].setTint(0x290E16);
    coloracc2_gph[0].setInteractive();
    coloracc2_gph[0].on('pointerdown',()=>{
    acc2_3.setTexture('acc2_3_1');
    this.data.set('acc2_var1', 0);
    this.data.set('acc2_var2', 0);
    this.data.set('acc2_var3', 1);
    last_acc2_3 = 0;
    });
        
    coloracc2_gph[1].setTint(0xA6140F);
    coloracc2_gph[1].setInteractive();
    coloracc2_gph[1].on('pointerdown',()=>{
    acc2_3.setTexture('acc2_3_2');
    this.data.set('acc2_var1', 0);
    this.data.set('acc2_var2', 0);
    this.data.set('acc2_var3', 2);
    last_acc2_3 = 1;
    });

    coloracc2_gph[2].setTint(0x992631);
    coloracc2_gph[2].setInteractive();
    coloracc2_gph[2].on('pointerdown',()=>{
    acc2_3.setTexture('acc2_3_3');
    this.data.set('acc2_var1', 0);
    this.data.set('acc2_var2', 0);
    this.data.set('acc2_var3', 3);
    last_acc2_3 = 2;
    });

    coloracc2_gph[3].setTint(0xDFB2A9);
    coloracc2_gph[3].setInteractive();
    coloracc2_gph[3].on('pointerdown',()=>{
    acc2_3.setTexture('acc2_3_4');
    this.data.set('acc2_var1', 0);
    this.data.set('acc2_var2', 0);
    this.data.set('acc2_var3', 4);
    last_acc2_3 = 3;
    });
    }
    });

    this.acc2Emitter2.emit('acc2_var2');


    acc2.getChildren().forEach(child => {
    layer16.add(child);
    child.setInteractive();
    acc2_qty++;
    child.id = acc2_qty;
    
    // Trigger
    child.on('pointerdown',()=>{
    
    tap2.play();
    this.color_acc2.destroy(true);

    // Remove all Images
    this.data.set('val9',0);
    
    layer10.remove([
    acc2_1.setPosition(-800,-400), acc2_2.setPosition(-800,-400), acc2_3.setPosition(-800,-400)
    ])
            
    // If not selected before, add image
    if(this.data.get('acc2_' + child.id) === 0){
    let i = 0;
    acc2.getChildren().forEach(child => {
    i++;
    this.data.set('acc2_' + i, 0);
    })
    
    let child_id = Number(child.id - 1);
    layer10.setPosition(layerxpos, layerypos);
    layer10.add([
    acc2_pick[child_id].setPosition(0,0)
    ])
    this.data.set('val9', child.id);
    this.data.set('acc2_' + child.id, 1);
    frameout.setVisible(true);
    }
    
    // If selected before, remove image 
    else if(this.data.get('acc2_' + child.id) === 1){
    this.data.set('acc2_' + child.id, 0);
    frameout.setVisible(false);
    }
        

    this.acc2Emitter2.emit('acc2_var2');
    // Select Outline new Position
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val9') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val9'),1)) + 130 * Math.max(this.data.get('val9')  - (1  +  5 * Math.floor(Math.min((this.data.get('val9') - 1) / 5,99))),0) , itemypos + layer16.y);
    
    });    
});
    
        Phaser.Actions.GridAlign(acc2.getChildren(), {
        width: 5,
        height: 5,
        cellWidth: 130,
        x: 54,
        y: this.game.renderer.height * 0.81
});
})

    // Slot Icono 10
    let acc3_slot = this.add.image(75 * 10 + 180, this.game.renderer.height * 0.72, 'dress_icon10');
    acc3_slot.setInteractive();
    acc3_slot.setDepth(10);
            
    acc3_slot.on('pointerdown',()=>{
    this.assetdestroy.emit('destroy');

    iconoutline.setPosition  (-200 + 118 * 14, 0)
    
    // BackHair (3)
    layer3.removeInteractive();
    // Pants (5)
    layer5.removeInteractive();
    // Skirt (6)
    layer6.removeInteractive();
    // Eyes (7)
    layer7.removeInteractive();
    // Cejas (8)
    layer8.removeInteractive();
    // Dress - Top - Shirt (9)
    layer9.removeInteractive();
    // Hairs (10)
    layer10.removeInteractive();
    // ACC1 (11)
    layer11.removeInteractive();
    // ACC2 (12)
    layer12.removeInteractive();

    tap4.play();
    up_arrow.setVisible(false);
    down_arrow.setVisible(false);

    // Casilla 10 -- Accesorios 3 --
    let acc3 = this.add.group();
    acc3.createMultiple({ key: 'acc3', frame: [ 0,1 ], repeat: -1 });
    this.acc3 = acc3;
    acc3.setDepth(11);
    
    let acc3_qty = 0;
    let acc3_pick = [acc3_1, acc3_2];
    layer16_qty = acc3_pick.length;
    layer16_y_cap = Number(Math.floor(acc3_pick.length / 5));
    layer16.setVisible(true);
    layer16.y = 0;
    tap4.play();
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val10') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val10'),1)) + 130 * Math.max(this.data.get('val10')  - (1  +  5 * Math.floor(Math.min((this.data.get('val10') - 1) / 5,99))),0) , itemypos);
    
    acc3.getChildren().forEach(child => {
    layer16.add(child);
    child.setInteractive();
    acc3_qty++;
    child.id = acc3_qty;
    
    // Trigger
    child.on('pointerdown',()=>{
    
    tap2.play();
    
    // Remove all Images
    this.data.set('val10',0);
    layer2.remove([
    acc3_1.setPosition(-800,-400), acc3_2.setPosition(-800,-400),
    ])
            
    // If not selected before, add image
    if(this.data.get('acc3_' + child.id) === 0){
    let i = 0;
    acc3.getChildren().forEach(child => {
    i++;
    this.data.set('acc3_' + i, 0);
    })
    
    let child_id = Number(child.id - 1);
    layer2.setPosition(layerxpos, layerypos);
    layer2.add([
    acc3_pick[child_id].setPosition(0,0)
    ])
    this.data.set('val10', child.id);
    this.data.set('acc3_' + child.id, 1);
    frameout.setVisible(true);
    }
    
    // If selected before, remove image 
    else if(this.data.get('acc3_' + child.id) === 1){
    this.data.set('acc3_' + child.id, 0);
    frameout.setVisible(false);
    }
        
    // Select Outline new Position
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val10') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val10'),1)) + 130 * Math.max(this.data.get('val10')  - (1  +  5 * Math.floor(Math.min((this.data.get('val10') - 1) / 5,99))),0) , itemypos + layer16.y);
    });    
});
    
        Phaser.Actions.GridAlign(acc3.getChildren(), {
        width: 5,
        height: 5,
        cellWidth: 130,
        x: 54,
        y: this.game.renderer.height * 0.81
    });
})

    // Slot Icono 11
    let eye_slot = this.add.image(75 * 11 + 200, this.game.renderer.height * 0.72, 'dress_icon11');
    eye_slot.setInteractive();
    eye_slot.setDepth(11);
            
    eye_slot.on('pointerdown',()=>{
    this.assetdestroy.emit('destroy');
    

    iconoutline.setPosition  (-200, 0)

    // Remove Interactivity
    // Background (1)

    // ACC3 (2)
    layer2.removeInteractive();
    // BackHair (3)
    layer3.removeInteractive();
    // Doll (4)

    // Pants (5)
    layer5.removeInteractive();
    // Skirt (6)
    layer6.removeInteractive();
    // Eyes (7)
    
    // Cejas (8)
    layer8.removeInteractive();
    // Dress - Top - Shirt (9)
    layer9.removeInteractive();
    // Hairs (10)
    layer10.removeInteractive();
    // ACC1 (11)
    layer11.removeInteractive();
    // ACC2 (12)
    layer12.removeInteractive();


    // layer7.setInteractive();
    // this.input.setDraggable(layer7);

    tap4.play();
    up_arrow.setVisible(false);
    down_arrow.setVisible(false);
    layer16.setVisible(true);
    layer16.y = 0;
    layer16_qty = 1;
    layer16_y_cap = 0;
    
    
    // Casilla 11 -- Ojos --
    let eyes = this.add.group();
    eyes.createMultiple({ key: 'eyes', frame: [ 0 ], repeat: -1 });
    this.eyes = eyes;
    eyes.setDepth(11);
    let eyes_gph = this.eyes.getChildren();   

    eyes.getChildren().forEach(child => {
        layer16.add(child);
    });


    let color_eyes = this.add.group({key:'white_dot', frameQuantity: 6});
    this.color_eyes = color_eyes;
    color_eyes.setDepth(12);
    let coloreyes_gph = this.color_eyes.getChildren();   

    Phaser.Actions.GridAlign(color_eyes.getChildren(), {
        width: 10,
        height: 10,
        cellWidth: 64,
        x: color_panel.x + 26,
        y: color_panel.y + 7
    });

    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val11') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val11'),1)) + 130 * Math.max(this.data.get('val11')  - (1  +  5 * Math.floor(Math.min((this.data.get('val11') - 1) / 5,99))),0) , itemypos);

    color_eyes.getChildren().forEach(child => {
        layer20.add(child);
    });

    coloreyes_gph[0].setTint(0xA7140F);
    coloreyes_gph[1].setTint(0xA70F8A);
    coloreyes_gph[2].setTint(0x0FA2A7);
    coloreyes_gph[3].setTint(0x33C432);
    coloreyes_gph[4].setTint(0xFFE800);
    coloreyes_gph[5].setTint(0xFF6B14);
    
    let curcolor = Number(this.data.get('val11_1') - 1)
    coloreyes_gph[curcolor].setTexture('whitedot_sel');

    coloreyes_gph[0].setInteractive();
    coloreyes_gph[1].setInteractive();
    coloreyes_gph[2].setInteractive();
    coloreyes_gph[3].setInteractive();
    coloreyes_gph[4].setInteractive();
    coloreyes_gph[5].setInteractive();


    coloreyes_gph[0].on('pointerdown',()=>{
        tap2.play();
        eye1_1.setTexture('eye1_1');
        this.data.set('val11_1',1);
        coloreyes_gph[0].setTexture('whitedot_sel');
        coloreyes_gph[1].setTexture('white_dot');
        coloreyes_gph[2].setTexture('white_dot');
        coloreyes_gph[3].setTexture('white_dot');
        coloreyes_gph[4].setTexture('white_dot');
        coloreyes_gph[5].setTexture('white_dot');
    });
    coloreyes_gph[1].on('pointerdown',()=>{
        tap2.play();
        eye1_1.setTexture('eye1_2');
        eye1_1.idval = 2;
        this.data.set('val11_1',2);
        coloreyes_gph[0].setTexture('white_dot');
        coloreyes_gph[1].setTexture('whitedot_sel');
        coloreyes_gph[2].setTexture('white_dot');
        coloreyes_gph[3].setTexture('white_dot');
        coloreyes_gph[4].setTexture('white_dot');
        coloreyes_gph[5].setTexture('white_dot');
    });
    coloreyes_gph[2].on('pointerdown',()=>{
        tap2.play();
        eye1_1.setTexture('eye1_3');
        this.data.set('val11_1',3);
        coloreyes_gph[0].setTexture('white_dot');
        coloreyes_gph[1].setTexture('white_dot');
        coloreyes_gph[2].setTexture('whitedot_sel');
        coloreyes_gph[3].setTexture('white_dot');
        coloreyes_gph[4].setTexture('white_dot');
        coloreyes_gph[5].setTexture('white_dot');
    });
    coloreyes_gph[3].on('pointerdown',()=>{
        tap2.play();
        eye1_1.setTexture('eye1_4');
        this.data.set('val11_1',4);
        coloreyes_gph[0].setTexture('white_dot');
        coloreyes_gph[1].setTexture('white_dot');
        coloreyes_gph[2].setTexture('white_dot');
        coloreyes_gph[3].setTexture('whitedot_sel');
        coloreyes_gph[4].setTexture('white_dot');
        coloreyes_gph[5].setTexture('white_dot');
    });
    coloreyes_gph[4].on('pointerdown',()=>{
        tap2.play();
        eye1_1.setTexture('eye1_5');
        this.data.set('val11_1',5);
        coloreyes_gph[0].setTexture('white_dot');
        coloreyes_gph[1].setTexture('white_dot');
        coloreyes_gph[2].setTexture('white_dot');
        coloreyes_gph[3].setTexture('white_dot');
        coloreyes_gph[4].setTexture('whitedot_sel');
        coloreyes_gph[5].setTexture('white_dot');
    });
    coloreyes_gph[5].on('pointerdown',()=>{
        tap2.play();
        eye1_1.setTexture('eye1_6');
        this.data.set('val11_1',6);
        coloreyes_gph[0].setTexture('white_dot');
        coloreyes_gph[1].setTexture('white_dot');
        coloreyes_gph[2].setTexture('white_dot');
        coloreyes_gph[3].setTexture('white_dot');
        coloreyes_gph[4].setTexture('white_dot');
        coloreyes_gph[5].setTexture('whitedot_sel');
    });





    
    
    
    Phaser.Actions.GridAlign(eyes.getChildren(), {
    width: 5,
    height: 5,
    cellWidth: 130,
    x: 54,
    y: this.game.renderer.height * 0.81
    });
        
    // Eye 1
    eyes_gph[0].setInteractive();
    eyes_gph[0].on('pointerdown',()=>{

    tap2.play();

    layer7.remove([ 
    eye1_2.setPosition(-400,-400),
    ])

    // Current Cloth
    this.data.set('val11', 1);

    // Checker
    if(this.data.get('eye1_1') === 0 ){
    
    layer7.setPosition(layerxpos, layerypos);
    layer7.add([
    eye1_1.setPosition(0,0)
    ])
    this.data.set('eye1_1', 1);
    this.data.set('eye1_2', 0);
    }else if(this.data.get('eye1_1') === 1){
    }
     
    // Frame Position
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val11') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val11'),1)) + 130 * Math.max(this.data.get('val11')  - (1  +  5 * Math.floor(Math.min((this.data.get('val11') - 1) / 5,99))),0) , itemypos);

    })
    })


  


    // Slot Icono 12
    let eyebrow_slot = this.add.image(75 * 12 + 220, this.game.renderer.height * 0.72, 'dress_icon12');
    eyebrow_slot.setInteractive();
    eyebrow_slot.setDepth(11);
            
    eyebrow_slot.on('pointerdown',()=>{
    this.assetdestroy.emit('destroy');

    iconoutline.setPosition  (-200 + 118 * 4, 0)

    // Remove Interactivity
    // Background (1)

    // ACC3 (2)
    layer2.removeInteractive();
    // BackHair (3)
    layer3.removeInteractive();
    // Doll (4)

    // Pants (5)
    layer5.removeInteractive();
    // Skirt (6)
    layer6.removeInteractive();
    // Eyes (7)
    layer7.removeInteractive();
    // Cejas (8)
    
    // Dress - Top - Shirt (9)
    layer9.removeInteractive();
    // Hairs (10)
    layer10.removeInteractive();
    // ACC1 (11)
    layer11.removeInteractive();
    // ACC2 (12)
    layer12.removeInteractive();


    tap4.play();
    up_arrow.setVisible(false);
    down_arrow.setVisible(false);


    // Casilla 12 -- Cejas --
    let eyebrows = this.add.group();
    eyebrows.createMultiple({ key: 'eyebrows', frame: [ 0,1,2,3,4,5,6,7,8,9,10 ], repeat: -1 });
    this.eyebrows = eyebrows;
    eyebrows.setDepth(11);

    let eyebrows_qty = 0;
    let eyebrows_pick = [eyebrow_1, eyebrow_2, eyebrow_3, eyebrow_4, eyebrow_5,eyebrow_6, eyebrow_7, eyebrow_8, eyebrow_9, eyebrow_10, eyebrow_11];
    layer16_qty = eyebrows_pick.length;
    layer16_y_cap = Number(Math.floor(eyebrows_pick.length / 5));
    layer16.setVisible(true);
    layer16.y = 0;
    tap4.play();
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val12') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val12'),1)) + 130 * Math.max(this.data.get('val12')  - (1  +  5 * Math.floor(Math.min((this.data.get('val12') - 1) / 5,99))),0) , itemypos);
    
    eyebrows.getChildren().forEach(child => {
    layer16.add(child);
    child.setInteractive();
    eyebrows_qty++;
    child.id = eyebrows_qty;
    
    // Trigger
    child.on('pointerdown',()=>{
    
    tap2.play();
    
    // Remove all Images
    this.data.set('val12',0);
    layer8.remove([
    eyebrow_1.setPosition(-800,-400), eyebrow_2.setPosition(-800,-400), eyebrow_3.setPosition(-800,-400), eyebrow_4.setPosition(-800,-400),
    eyebrow_5.setPosition(-800,-400), eyebrow_6.setPosition(-800,-400), eyebrow_7.setPosition(-800,-400), eyebrow_8.setPosition(-800,-400),
    eyebrow_9.setPosition(-800,-400), eyebrow_10.setPosition(-800,-400), eyebrow_11.setPosition(-800,-400),
    ])
            
    // If not selected before, add image
    if(this.data.get('eyebrow_' + child.id) === 0){
    let i = 0;
    eyebrows.getChildren().forEach(child => {
    i++;
    this.data.set('eyebrow_' + i, 0);
    })
    
    let child_id = Number(child.id - 1);
    layer8.setPosition(layerxpos, layerypos);
    layer8.add([
    eyebrows_pick[child_id].setPosition(0,0)
    ])
    this.data.set('val12', child.id);
    this.data.set('eyebrow_' + child.id, 1);
    frameout.setVisible(true);
    }
    
    // If selected before, remove image 
    else if(this.data.get('eyebrow_' + child.id) === 1){
    
    let i = 0;
    eyebrows.getChildren().forEach(child => {
    i++;
    this.data.set('eyebrow_' + i, 0);
    })

    layer8.setPosition(layerxpos, layerypos);
    layer8.add([
    eyebrow_1.setPosition(0,0)
    ])
    this.data.set('val12', 1);
    this.data.set('eyebrow_1', 1);
    // this.data.set('eyebrow_' + child.id, 0);
    // frameout.setVisible(false);
    }
        
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val12') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val12'),1)) + 130 * Math.max(this.data.get('val12')  - (1  +  5 * Math.floor(Math.min((this.data.get('val12') - 1) / 5,99))),0) , itemypos + layer16.y);
    
    });    
});
    
    Phaser.Actions.GridAlign(eyebrows.getChildren(), {
    width: 5,
    height: 5,
    cellWidth: 130,
    x: 54,
    y: this.game.renderer.height * 0.81
    });
})

    
    // Slot Icono 13
    let background_slot = this.add.image(75 * 13 + 240, this.game.renderer.height * 0.72, 'dress_icon13');
    background_slot.setInteractive();
    background_slot.setDepth(11);
         
    background_slot.on('pointerdown',()=>{
    this.assetdestroy.emit('destroy');

    iconoutline.setPosition  (-200 + 118 * 15, 0)

    // Remove Interactivity
    // Background (1)

    // ACC3 (2)
    layer2.removeInteractive();
    // BackHair (3)
    layer3.removeInteractive();
    // Doll (4)

    // Pants (5)
    layer5.removeInteractive();
    // Skirt (6)
    layer6.removeInteractive();
    // Eyes (7)
    layer7.removeInteractive();
    // Cejas (8)
    layer8.removeInteractive();
    // Dress - Top - Shirt (9)
    layer9.removeInteractive();
    // Hairs (10)
    layer10.removeInteractive();
    // ACC1 (11)
    layer11.removeInteractive();
    // ACC2 (12)
    layer12.removeInteractive();


    tap4.play();
    up_arrow.setVisible(false);
    down_arrow.setVisible(false);

    // Casilla 13 -- Fondos --
    let backgrounds = this.add.group();
    backgrounds.createMultiple({ key: 'backgrounds', frame: [0,1,2], repeat: -1 });
    this.backgrounds = backgrounds;
    backgrounds.setDepth(11);

    let backgrounds_qty = 0;
    let backgrounds_pick = [background_1, background_2, background_3];
    layer16_qty = backgrounds_pick.length;
    layer16_y_cap = Number(Math.floor(backgrounds_pick.length / 5));
    layer16.setVisible(true);
    layer16.y = 0;
    tap4.play();
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val13') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val13'),1)) + 130 * Math.max(this.data.get('val13')  - (1  +  5 * Math.floor(Math.min((this.data.get('val13') - 1) / 5,99))),0) , itemypos);
    
    
    backgrounds.getChildren().forEach(child => {
    layer16.add(child);
    child.setInteractive();
    backgrounds_qty++;
    child.id = backgrounds_qty;
    
    // Trigger
    child.on('pointerdown',()=>{
    
    tap2.play();
    
    // Remove all Images
    this.data.set('val13',0);
    layer1.remove([
    background_1.setPosition(-900,-1200), background_2.setPosition(-900,-1200), background_3.setPosition(-900,-1200),
    ])
            
    // If not selected before, add image
    if(this.data.get('background_' + child.id) === 0){
    let i = 0;
    backgrounds.getChildren().forEach(child => {
    i++;
    this.data.set('background_' + i, 0);
    })
    
    let child_id = Number(child.id - 1);
    layer1.setPosition(layerxpos, layerypos);
    layer1.add([
    backgrounds_pick[child_id].setPosition(0,0)
    ])
    this.data.set('val13', child.id);
    this.data.set('background_' + child.id, 1);
    frameout.setVisible(true);
    }
    
    // If selected before, remove image 
    else if(this.data.get('background_' + child.id) === 1){
    let i = 0;
    backgrounds.getChildren().forEach(child => {
    i++;
    this.data.set('background_' + i, 0);
    })

    layer1.setPosition(layerxpos, layerypos);
    layer1.add([
    background_1.setPosition(0,0)
    ])
    this.data.set('val13', 1);
    this.data.set('background_1', 1);
    }
        
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val13') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val13'),1)) + 130 * Math.max(this.data.get('val13')  - (1  +  5 * Math.floor(Math.min((this.data.get('val13') - 1) / 5,99))),0) , itemypos + layer16.y);
    
    });    
});
    
    Phaser.Actions.GridAlign(backgrounds.getChildren(), {
    width: 5,
    height: 5,
    cellWidth: 130,
    x: 54,
    y: this.game.renderer.height * 0.81
});
})

// Slot Icono 14
let nose_slot = this.add.image(75 * 14 + 240, this.game.renderer.height * 0.72, 'dress_icon15');
nose_slot.setInteractive();
nose_slot.setDepth(11);
     
nose_slot.on('pointerdown',()=>{
this.assetdestroy.emit('destroy');

iconoutline.setPosition  (-200 + 118 * 3, 0)


// Remove Interactivity
// Background (1)

// ACC3 (2)
layer2.removeInteractive();
// BackHair (3)
layer3.removeInteractive();
// Doll (4)

// Pants (5)
layer5.removeInteractive();
// Skirt (6)
layer6.removeInteractive();
// Eyes (7)
layer7.removeInteractive();
// Cejas (8)
layer8.removeInteractive();
// Dress - Top - Shirt (9)
layer9.removeInteractive();
// Hairs (10)
layer10.removeInteractive();
// ACC1 (11)
layer11.removeInteractive();
// ACC2 (12)
layer12.removeInteractive();


tap4.play();
up_arrow.setVisible(false);
down_arrow.setVisible(false);

    // Slot Icono 14 
    let noses = this.add.group();
    noses.createMultiple({ key: 'noses', frame: [ 0,1,2,3,4,5,6,7,8,9,10 ], repeat: -1 });
    this.noses = noses;
    noses.setDepth(11);

    let noses_qty = 0;
    let noses_pick = [nose_1, nose_2, nose_3, nose_4, nose_4, nose_5, nose_6, nose_7, nose_8, nose_9, nose_10,nose_11];
    layer16_qty = noses_pick.length;
    layer16_y_cap = Number(Math.floor(noses_pick.length / 6));
    layer16.setVisible(true);
    layer16.y = 0;
    tap4.play();
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val15') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val15'),1)) + 130 * Math.max(this.data.get('val15')  - (1  +  5 * Math.floor(Math.min((this.data.get('val15') - 1) / 5,99))),0) , itemypos);
    

    noses.getChildren().forEach(child => {
    layer16.add(child);
    child.setInteractive();
    noses_qty++;
    child.id = noses_qty;
    
    // Trigger
    child.on('pointerdown',()=>{
    
    tap2.play();
    
    // Remove all Images
    this.data.set('val15',0);
    layer5.remove([
    nose_1.setPosition(-800,-400), nose_2.setPosition(-800,-400), nose_3.setPosition(-800,-400), nose_4.setPosition(-800,-400),
    nose_5.setPosition(-800,-400), nose_6.setPosition(-800,-400), nose_7.setPosition(-800,-400), nose_8.setPosition(-800,-400),
    nose_9.setPosition(-800,-400), nose_10.setPosition(-800,-400), nose_11.setPosition(-800,-400),
    ])
            
    // If not selected before, add image
    if(this.data.get('nose_' + child.id) === 0){
    let i = 0;
    noses.getChildren().forEach(child => {
    i++;
    this.data.set('nose_' + i, 0);
    })
    
    let child_id = Number(child.id - 1);
    layer5.setPosition(layerxpos, layerypos);
    layer5.add([
    noses_pick[child_id].setPosition(0,0)
    ])
    this.data.set('val15', child.id);
    this.data.set('nose_' + child.id, 1);
    frameout.setVisible(true);
    }
    
    // If selected before, remove image 
    else if(this.data.get('nose_' + child.id) === 1){

    let i = 0;
    noses.getChildren().forEach(child => {
    i++;
    this.data.set('nose_' + i, 0);
    })

    layer5.setPosition(layerxpos, layerypos);
    layer5.add([
    nose_1.setPosition(0,0)
    ])
    this.data.set('val15', 1);
    this.data.set('nose_1', 1);
    // this.data.set('nose_' + child.id, 0);
    // frameout.setVisible(false);
    }
        
    // Select Outline new Position
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val15') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val15'),1)) + 130 * Math.max(this.data.get('val15')  - (1  +  5 * Math.floor(Math.min((this.data.get('val15') - 1) / 5,99))),0) , itemypos + layer16.y);
    });    
});
    
    Phaser.Actions.GridAlign(noses.getChildren(), {
    width: 5,
    height: 5,
    cellWidth: 130,
    x: 54,
    y: this.game.renderer.height * 0.81
});
});



// Slot Icono 15
let mouth_slot = this.add.image(75 * 15 + 240, this.game.renderer.height * 0.72, 'dress_icon16');
mouth_slot.setInteractive();
mouth_slot.setDepth(11);
     
mouth_slot.on('pointerdown',()=>{
this.assetdestroy.emit('destroy');


iconoutline.setPosition  (-200 + 118 * 1, 0)

// Remove Interactivity
// Background (1)

// ACC3 (2)
layer2.removeInteractive();
// BackHair (3)
layer3.removeInteractive();
// Doll (4)

// Pants (5)
layer5.removeInteractive();
// Skirt (6)
layer6.removeInteractive();
// Eyes (7)
layer7.removeInteractive();
// Cejas (8)
layer8.removeInteractive();
// Dress - Top - Shirt (9)
layer9.removeInteractive();
// Hairs (10)
layer10.removeInteractive();
// ACC1 (11)
layer11.removeInteractive();
// ACC2 (12)
layer12.removeInteractive();


let mouths = this.add.group();
mouths.createMultiple({ key: 'mouths', frame: [ 0,1,2,3,4,5,6,7,8,9,10 ], repeat: -1 });
this.mouths = mouths;
mouths.setDepth(11);
// let mouth_gph = this.mouths.getChildren(); 

// Comprimir estos 8 Eventos para usarlos para cada slot de ropa
let mouth_qty = 0;
let mouth_pick = [mouth_1,mouth_2,mouth_3,mouth_4,mouth_5,mouth_6,mouth_7,mouth_8,mouth_9,mouth_10,mouth_11];
layer16_qty = mouth_pick.length;
layer16_y_cap = Number(Math.floor(mouth_pick.length / 5));
layer16.setVisible(true);
layer16.y = 0;
tap4.play();
itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val16') - 1) / 5,99)));
frameout.setPosition(-170 + (224 * Math.min(this.data.get('val16'),1)) + 130 * Math.max(this.data.get('val16')  - (1  +  5 * Math.floor(Math.min((this.data.get('val16') - 1) / 5,99))),0) , itemypos);

    mouths.getChildren().forEach(child => {
    layer16.add(child);
    child.setInteractive();
    mouth_qty++;
    child.id = mouth_qty;

    // Trigger
    child.on('pointerdown',()=>{

    tap2.play();

    // Remove all Images
    this.data.set('val16',0);
    layer5.remove([
    mouth_1.setPosition(-400,-400),mouth_2.setPosition(-400,-400), mouth_3.setPosition(-400,-400), mouth_4.setPosition(-400,-400), 
    mouth_5.setPosition(-400,-400),mouth_6.setPosition(-400,-400), mouth_7.setPosition(-400,-400), mouth_8.setPosition(-400,-400), 
    mouth_9.setPosition(-400,-400),mouth_10.setPosition(-400,-400), mouth_11.setPosition(-400,-400),
    ])
        
    // If not selected before, add image
    if(this.data.get('mouth_' + child.id) === 0){
    let i = 0;
    mouths.getChildren().forEach(child => {
    i++;
    this.data.set('mouth_' + i, 0);
    })

    let child_id = Number(child.id - 1);
    layer5.setPosition(layerxpos, layerypos);
    layer5.add([
    mouth_pick[child_id].setPosition(0,0)
    ])
    this.data.set('val16', child.id);
    this.data.set('mouth_' + child.id, 1);
    frameout.setVisible(true);
    }

    // If selected before, remove image 
    // Nuevo => Hacer que ponga la imagen 1 como default
    else if(this.data.get('mouth_' + child.id) === 1){

    let i = 0;
    mouths.getChildren().forEach(child => {
    i++;
    this.data.set('mouth_' + i, 0);
    })
    
    layer5.setPosition(layerxpos, layerypos);
    layer5.add([
    mouth_1.setPosition(0,0)
    ])
    this.data.set('val16', 1);
    this.data.set('mouth_1', 1);

    // this.data.set('mouth_' + child.id, 0);
    // frameout.setVisible(false);
    }
    
    // Select Outline new Position
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val16') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val16'),1)) + 130 * Math.max(this.data.get('val16')  - (1  +  5 * Math.floor(Math.min((this.data.get('val16') - 1) / 5,99))),0) , itemypos + layer16.y);

    });    
});

    Phaser.Actions.GridAlign(mouths.getChildren(), {
    width: 5,
    height: 5,
    cellWidth: 130,
    x: 54,
    y: this.game.renderer.height * 0.81
    });
})

// Slot Icono 16
let ear_slot = this.add.image(75 * 16 + 240, this.game.renderer.height * 0.72, 'dress_icon17');
ear_slot.setInteractive();
ear_slot.setDepth(11);
     
ear_slot.on('pointerdown',()=>{
this.assetdestroy.emit('destroy');

iconoutline.setPosition  (-200 + 118 * 5, 0)

// Remove Interactivity
// Background (1)

// ACC3 (2)
layer2.removeInteractive();
// BackHair (3)
layer3.removeInteractive();
// Doll (4)

// Pants (5)
layer5.removeInteractive();
// Skirt (6)
layer6.removeInteractive();
// Eyes (7)
layer7.removeInteractive();
// Cejas (8)
layer8.removeInteractive();
// Dress - Top - Shirt (9)
layer9.removeInteractive();
// Hairs (10)
layer10.removeInteractive();
// ACC1 (11)
layer11.removeInteractive();
// ACC2 (12)
layer12.removeInteractive();


tap4.play();
up_arrow.setVisible(false);
down_arrow.setVisible(false);

    // Slot Icono 15 
    let ears = this.add.group();
    ears.createMultiple({ key: 'ears', frame: [ 0,1 ], repeat: -1 });
    this.ears = ears;
    ears.setDepth(11);

    let ears_qty = 0;
    let ears_pick = [ear_1,ear_2];
    layer16_qty = ears_pick.length;
    layer16_y_cap = Number(Math.floor(ears_pick.length / 5));
    layer16.setVisible(true);
    layer16.y = 0;
    tap4.play();
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val17') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val17'),1)) + 130 * Math.max(this.data.get('val17')  - (1  +  5 * Math.floor(Math.min((this.data.get('val17') - 1) / 5,99))),0) , itemypos);

    ears.getChildren().forEach(child => {
    layer16.add(child);
    child.setInteractive();
    ears_qty++;
    child.id = ears_qty;

    // Trigger
    child.on('pointerdown',()=>{

    tap2.play();

    // Remove all Images
    this.data.set('val17',0);
    layer4.remove([
    ear_2.setPosition(-800,-400),
    ])
        
    // If not selected before, add image
    if(this.data.get('ear_' + child.id) === 0){
    let i = 0;
    ears.getChildren().forEach(child => {
    i++;
    this.data.set('ear_' + i, 0);
    })

    let child_id = Number(child.id - 1);
    layer4.setPosition(layerxpos, layerypos);
    layer4.add([
    ears_pick[child_id].setPosition(0,0)
    ])
    this.data.set('val17', child.id);
    this.data.set('ear_' + child.id, 1);
    frameout.setVisible(true);
    }

    // If selected before, remove image 
    else if(this.data.get('ear_' + child.id) === 1){

    let i = 0;
    ears.getChildren().forEach(child => {
    i++;
    this.data.set('ear_' + i, 0);
    })
        
    layer4.setPosition(layerxpos, layerypos);
    layer4.add([
    ear_1.setPosition(0,0)
    ])
    this.data.set('val17', 1);
    this.data.set('ear_1', 1);

    // this.data.set('ear_' + child.id, 0);
    // frameout.setVisible(false);
    }
    
    // Select Outline new Position
    itemypos = this.game.renderer.height * 0.81 + (130 * Math.floor(Math.min((this.data.get('val17') - 1) / 5,99)));
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val17'),1)) + 130 * Math.max(this.data.get('val17')  - (1  +  5 * Math.floor(Math.min((this.data.get('val17') - 1) / 5,99))),0) , itemypos + layer16.y);

    });    
});

    Phaser.Actions.GridAlign(ears.getChildren(), {
    width: 5,
    height: 5,
    cellWidth: 130,
    x: 54,
    y: this.game.renderer.height * 0.81
});

// let ear_gph = this.ears.getChildren(); 


// ears.getChildren().forEach(child => {
//     layer16.add(child);
// });

    
    
// Phaser.Actions.GridAlign(ears.getChildren(), {
// width: 5,
// height: 5,
// cellWidth: 130,
// x: 54,
// y: itemypos
// });


// frameout.setPosition(-170 + (224 * Math.min(this.data.get('val17'),1)) + 130 * Math.max(this.data.get('val17')-1,0), itemypos);

// // Ear 1

// ear_gph[0].setInteractive();
// ear_gph[0].on('pointerdown',()=>{

// tap2.play();

// layer19.remove([ 
// ear_2.setPosition(-400,-400),
// ])

// // Current Cloth
// this.data.set('val17', 1);

// // Checker
// if(this.data.get('ear_1') === 0 ){


// this.data.set('ear_1', 1);
// this.data.set('ear_2', 0);
// }else if(this.data.get('ear_1') === 1){

// }

// // Frame Position
// frameout.setPosition(-170 + (224 * Math.min(this.data.get('val17'),1)) + 130 * Math.max(this.data.get('val17')-1,0), itemypos);
// })

// // Ear 2

// ear_gph[1].setInteractive();
// ear_gph[1].on('pointerdown',()=>{

// tap2.play();


// // Current Cloth
// this.data.set('val17', 2);

// // Checker
// if(this.data.get('ear_2') === 0 ){

// layer19.setPosition(layerxpos, layerypos);
// layer19.add([
// ear_2.setPosition(0,0)
// ])
// ear_2.setTexture('ear2_' + Number(this.data.get('val14')+1));
// this.data.set('ear_1', 0);
// this.data.set('ear_2', 1);
// }else if(this.data.get('ear_2') === 1){
// layer19.remove([
// ear_2.setPosition(-400,-400)
// ])

// this.data.set('ear_1', 1);
// this.data.set('ear_2', 0);
// this.data.set('val17', 1);
// }

// // Frame Position
// frameout.setPosition(-170 + (224 * Math.min(this.data.get('val17'),1)) + 130 * Math.max(this.data.get('val17')-1,0), itemypos);
// })

})



    layer15.add([
    dress_slot.setPosition      (-200 + 118 * 12, 0),
    top_slot.setPosition        (-200 + 118 * 2, 0),  // Face Accesory
    hair_slot.setPosition       (-200 + 118 * 6, 0),  
    backhair_slot.setPosition   (-200 + 118 * 7, 0),
    shirt_slot.setPosition      (-200 + 118 * 9, 0),
    skirt_slot.setPosition      (-200 + 118 * 10, 0),
    pants_slot.setPosition      (-200 + 118 * 11, 0),
    acc1_slot.setPosition       (-200 + 118 * 8, 0),  // Strands
    acc2_slot.setPosition       (-200 + 118 * 13, 0),  // Accesory Front
    acc3_slot.setPosition       (-200 + 118 * 14, 0),  // Accesory Back
    eye_slot.setPosition        (-200,0),
    eyebrow_slot.setPosition    (-200 + 118 * 4, 0),
    background_slot.setPosition (-200 + 118 * 15, 0),
    nose_slot.setPosition       (-200 + 118 * 3, 0),  
    mouth_slot.setPosition      (-200 + 118 * 1, 0),
    ear_slot.setPosition        (-200 + 118 * 5, 0),
    iconoutline.setPosition     (-200, 0),
    ])


    this.tween_down_back = this.tweens.add({
        // targets: [backdrop, layer15,layer16, layer20, frameout, color_panel],
        targets: [layer15,layer16, layer20, frameout, color_panel],
        y: this.game.renderer.height + 420,
        ease: 'Sine.easeIn',
        duration: 500,
        paused: true,
        persist: true
    })

    this.tween_down_frameout = this.tweens.add({
        targets: [frameout],
        y: this.init_y,
        ease: 'Sine.easeIn',
        duration: 500,
        paused: true,
        persist: true,
        onComplete: () => {
            frameout.y = this.init_y;
        }
    })


    // this.tween_down_backdrop = this.tweens.add({
    //     targets: [backdrop],
    //     y: this.game.renderer.height * 0.84,
    //     ease: 'Sine.easeIn',
    //     duration: 500,
    //     paused: true,
    //     persist: true
    // })

    this.tween_down_colorpanel = this.tweens.add({
        targets: [color_panel],
        y: this.game.renderer.height * 0.765,
        ease: 'Sine.easeIn',
        duration: 500,
        paused: true,
        persist: true
    })

    
    this.tween_down_layer15 = this.tweens.add({
        targets: [layer15],
        y: this.game.renderer.height * 0.72,
        ease: 'Sine.easeIn',
        duration: 500,
        paused: true,
        persist: true
    })

    this.tween_down_layer16 = this.tweens.add({
        targets: [layer16],
        y: 0,
        ease: 'Sine.easeIn',
        duration: 500,
        paused: true,
        persist: true
    })

    this.tween_down_layer20 = this.tweens.add({
        targets: [layer20],
        y: 0,
        ease: 'Sine.easeIn',
        duration: 500,
        paused: true,
        persist: true
    })


this.newdress();

// Load

if(this.load_true === 1){

    
    // Load Skin Colors
    let skinid = parseInt(localStorage.getItem('skin_id' + this.slot_cur));
    for(let i=0;i<18;i++){
        let numb = i - 1;
    if(skinid === numb){
        doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[numb]);
        this.data.set('val14', skinid);
    }
    }

    // Load Dress
    let dressesid = parseInt(localStorage.getItem('dress_id' + this.slot_cur));
    let dresses_no = [dress1,dress2,dress3];
    let dresses_length = dresses_no.length;

    for(let i=0;i<dresses_length;i++){

    let id = i + 1;
    
    if(dressesid === id){
    // layer10.setInteractive();
    // this.input.setDraggable(layer10);
    this.data.set('dress' + id, 1)

    this.data.set('val1', id)
    frameout.setPosition(-170 + (224 * Math.min(this.data.get('val1'),1)) + 130 * Math.max(this.data.get('val1')-1,0), itemypos);
    // layer10.setPosition(localStorage.getItem('dressxpos' + this.slot_cur), localStorage.getItem('dressypos' + this.slot_cur));
    layer10.add([
    // dresses_no[i].setPosition(localStorage.getItem('dressxpos' + this.slot_cur) - this.game.renderer.width / 2, localStorage.getItem('dressypos' + this.slot_cur) - this.game.renderer.height * 0.42)
    dresses_no[i].setPosition(0,0)
    ])
    }
    }

    // Load Tops
    let topsid = parseInt(localStorage.getItem('top_id' + this.slot_cur));
    let tops_no = [top1,top2,top3,top4,top5,top6,top7,top8,top9,top10,top11,top12,top13,top14,top15];
    let tops_length = tops_no.length;

    for(let i=0;i<tops_length;i++){

    let id = i + 1;

    if(topsid === id){
    this.data.set('top' + id, 1)
    this.data.set('val2', id)

    layer4.add([
    tops_no[i].setPosition(0, 0)
    ])
    }
    }

    // Load Hair
    let hairid = parseInt(localStorage.getItem('hair_id' + this.slot_cur));
    let hair_no = [hair1,hair2,hair3,hair4,hair5,hair6,hair7,hair8,hair9,hair10];
    let hair_length = hair_no.length;

    for(let i=0;i<hair_length;i++){

    let id = i + 1;

    if(hairid === id){

    layer12.remove([
    hair1.setPosition(-800,-400)
    ])

    this.data.set('hair' + id, 1)
    this.data.set('val3', id)

    layer12.add([
    hair_no[i].setPosition(0,0)
    ])
    }
    }

    // Load Backhair
    let backhairid = parseInt(localStorage.getItem('backhair_id' + this.slot_cur));
    let backhairid_no = [backhair1,backhair2,backhair3,backhair4,backhair5,backhair6,backhair7];
    let backhairid_length = backhairid_no.length;

    for(let i=0;i<backhairid_length;i++){

    let id = i + 1;

    if(backhairid === id){

    layer3.remove([
    backhair1.setPosition(-800,-400)
    ])

    this.data.set('hair' + id, 1)
    this.data.set('val4', id)

    layer3.add([
    backhairid_no[i].setPosition(0,0)
    ])
    }
    }
    
    // Load Shirt
    let shirtid = parseInt(localStorage.getItem('shirt_id' + this.slot_cur));
    let shirtid_no = [shirt1,shirt2,shirt3,shirt4];
    let shirtid_length = shirtid_no.length;

    for(let i=0;i<shirtid_length;i++){

    let id = i + 1;

    if(shirtid === id){

    // Cambiar la Textura

    layer9.remove([
    shirt1.setPosition(-800, -400)
    ])

    this.data.set('shirt' + id, 1)
    this.data.set('val5', id)
    this.data.set('shirt_var1', 0);

    // layer9.setPosition(localStorage.getItem('shirtxpos' + this.slot_cur), localStorage.getItem('shirtypos' + this.slot_cur));
    layer9.add([
    shirtid_no[i].setPosition(0, 0)
    ])
    shirtid_no[i].setTexture('shirt_' + id + '_' + Number(localStorage.getItem('shirt_var' + id + "_" + this.slot_cur)));
    this.data.set('shirt_var' + id, Number(localStorage.getItem('shirt_var' + id + "_" + this.slot_cur)));
    }
    }

    // Load Skirt
    let skirtid = parseInt(localStorage.getItem('skirt_id' + this.slot_cur));
    let skirtid_no = [skirt1,skirt2,skirt3];
    let skirtid_length = skirtid_no.length;

    for(let i=0;i<skirtid_length;i++){

    let id = i + 1;

    if(skirtid === id){

    this.data.set('skirt' + id, 1)
    this.data.set('val6', id)

    // layer6.setPosition(localStorage.getItem('skirtxpos' + this.slot_cur), localStorage.getItem('skirtypos' + this.slot_cur));
    layer5.add([
    skirtid_no[i].setPosition(0, 0)
    ])
    skirtid_no[i].setTexture('skirt_' + id + '_' + Number(localStorage.getItem('skirt_var' + id + "_" + this.slot_cur)));
    this.data.set('skirt_var' + id, Number(localStorage.getItem('skirt_var' + id + "_" + this.slot_cur)));
    }
    }

    // Load Pants
    let pantsid = parseInt(localStorage.getItem('pants_id' + this.slot_cur));
    let pantsid_no = [pants1,pants2,pants3,pants4];
    let pantsid_length = pantsid_no.length;

    for(let i=0;i<pantsid_length;i++){

    let id = i + 1;

    if(pantsid === id){

    layer6.remove([
    pants1.setPosition(-800,-400)
    ])

    // layer5.setInteractive();
    // this.input.setDraggable(layer5);

    this.data.set('pants' + id, 1)
    this.data.set('val7', id)
    this.data.set('pants_var1', 0);

    // layer5.setPosition(localStorage.getItem('pantsxpos' + this.slot_cur), localStorage.getItem('pantsypos' + this.slot_cur));
    layer6.add([
    pantsid_no[i].setPosition(0,0)
    ])
    pantsid_no[i].setTexture('pants_' + id + '_' + Number(localStorage.getItem('pants_var' + id + "_" + this.slot_cur)));
    this.data.set('pants_var' + id, Number(localStorage.getItem('pants_var' + id + "_" + this.slot_cur)));
    }
    }

    // Load ACC 1
    let acc1id = parseInt(localStorage.getItem('acc1_id' + this.slot_cur));
    let acc1id_no = [acc1_1];
    let acc1id_length = acc1id_no.length;

    for(let i=0;i<acc1id_length;i++){

    let id = i + 1;

    if(acc1id === id){

    this.data.set('acc1_' + id, 1)
    this.data.set('val8', id)

    layer11.add([
    acc1id_no[i].setPosition(0,0)
    ])
    }
    }

    // Load ACC 2
    let acc2id = parseInt(localStorage.getItem('acc2_id' + this.slot_cur));
    let acc2id_no = [acc2_1,acc2_2,acc2_3];
    let acc2id_length = acc2id_no.length;
    
    for(let i=0;i<acc2id_length;i++){

    let id = i + 1;

    if(acc2id === id){

    this.data.set('acc2_' + id, 1)
    this.data.set('val9', id)
    this.data.set('acc2_var1', 0);

    layer10.add([
    acc2id_no[i].setPosition(0,0)
    ])
    acc2id_no[i].setTexture('acc2_' + id + '_' + Number(localStorage.getItem('acc2_var' + id + "_" + this.slot_cur)));
    this.data.set('acc2_var' + id, Number(localStorage.getItem('acc2_var' + id + "_" + this.slot_cur)));
    }
    }

    // Load ACC 3
    let acc3id = parseInt(localStorage.getItem('acc3_id' + this.slot_cur));
    let acc3id_no = [acc3_1,acc3_2];
    let acc3id_length = acc3id_no.length;

    for(let i=0;i<acc3id_length;i++){

    let id = i + 1;

    if(acc3id === id){

    this.data.set('acc3_' + id, 1)
    this.data.set('val10', id)

    layer2.add([
    acc3id_no[i].setPosition(0,0)
    ])
    }
    }

    // Load Eyes
    let eye1id = parseInt(localStorage.getItem('eye_id' + this.slot_cur));
    let eye1id_no = [eye1_1];
    let eye1id_length = eye1id_no.length;

    let eye1_colorid = parseInt(localStorage.getItem('eye1_id' + this.slot_cur));


    for(let i=0;i<eye1id_length;i++){

    let id = i + 1;

    if(eye1id === id){


    layer7.remove([
    eye1_1.setPosition(-400,-400)
    ])

    this.data.set('eye_' + id, 1)
    this.data.set('val11', id)
    this.data.set('val11_1',eye1_colorid);

    layer7.add([
    eye1id_no[i].setPosition(0,0)
    ])
    eye1id_no[i].setTexture('eye1_' + eye1_colorid);

    
    }
    }

    // Load Eyebrows
    let eyebrowid = parseInt(localStorage.getItem('eyebrow_id' + this.slot_cur));
    let eyebrowid_no = [eyebrow_1,eyebrow_2,eyebrow_3, eyebrow_4, eyebrow_5, eyebrow_6, eyebrow_7, eyebrow_8, eyebrow_9, eyebrow_10, eyebrow_11];
    let eyebrowid_length = eyebrowid_no.length;

    for(let i=0;i<eyebrowid_length;i++){

    let id = i + 1;

    if(eyebrowid === id){

    layer8.remove([
    eyebrow_1.setPosition(0,0)
    ])

    this.data.set('eyebrow_' + id, 1)
    this.data.set('val12', id)

    layer8.add([
    eyebrowid_no[i].setPosition(0,0)
    ])
    }
    }
    

    // Load Backgrounds
    let backgroundid = parseInt(localStorage.getItem('background_id' + this.slot_cur));
    let backgroundid_no = [background_1, background_2, background_3];
    let backgroundid_length = backgroundid_no.length;

    for(let i=0;i<backgroundid_length;i++){

    let id = i + 1;

    if(backgroundid === id){

    layer1.remove([
    background_1.setPosition(-900,-1400)
    ])

    this.data.set('background_' + id, 1)
    this.data.set('val13', id)
    
    layer1.add([
    backgroundid_no[i].setPosition(0,0)
    ])
    }
    }
    
    // Load Noses
    let noseid = parseInt(localStorage.getItem('nose_id' + this.slot_cur));
    let noseid_no = [nose_1,nose_2,nose_3,nose_4,nose_5,nose_6,nose_7,nose_8,nose_9,nose_10,nose_11];
    let noseid_length = noseid_no.length;

    for(let i=0;i<noseid_length;i++){

    let id = i + 1;

    if(noseid === id){

    layer5.remove([
    nose_1.setPosition(-400,-400)
    ])

    this.data.set('nose_' + id, 1)
    this.data.set('val15', id)

    layer5.add([
    noseid_no[i].setPosition(0,0)
    ])
    }
    }

    // Load Mouths
    let mouthid = parseInt(localStorage.getItem('mouth_id' + this.slot_cur));
    let mouthid_no = [mouth_1,mouth_2,mouth_3,mouth_4,mouth_5,mouth_6,mouth_7,mouth_8,mouth_9,mouth_10,mouth_11];
    let mouthid_length = mouthid_no.length;
 
    for(let i=0;i<mouthid_length;i++){
 
    let id = i + 1;
 
    if(mouthid === id){

    layer5.remove([
    mouth_1.setPosition(-400,-400)
    ])
 
    this.data.set('mouth_' + id, 1)
    this.data.set('val16', id)
 
    layer5.add([
    mouthid_no[i].setPosition(0,0)
    ])
    }
    }

    // Load Ears

    let earid = parseInt(localStorage.getItem('ear_id' + this.slot_cur));
    let earid_no = [ear_2, ear_2];
    let earid_length = earid_no.length;
     
    let skin = parseInt(localStorage.getItem('skin_id' + this.slot_cur));
    let curskin = Number (skin + 1);

    for(let i=0;i<earid_length;i++){
     
    let id = i + 2;
             
    if(earid === id){
             
    this.data.set('ear_' + id, 1)
    this.data.set('val17', id)
             
    layer19.add([
    earid_no[i].setPosition(0,0)
    ])
    earid_no[i].setTexture("ear" + earid + "_" + curskin);
    }
    }

this.load_true = 0;
}





// if(this.data.get('val1') != 0){
//     layer9.setInteractive();
//     this.input.setDraggable(layer9);
//     }else if(this.data.get('val1') === 0){
//     layer9.removeInteractive();
//     }

// this.data.set('val13', 1);    
// layer1.setPosition(layerxpos, layerypos);
// layer1.add([
// background_0.setPosition(0,0)
// ])

    
    eye_slot.emit('pointerdown');

    
}



newdress(){

    // Identificar los otros
    let dress = this.add.group();
    this.dress = dress;

    let tops = this.add.group();
    this.tops = tops;

    let hairs = this.add.group();
    this.hairs = hairs;

    let backhairs = this.add.group();
    this.backhairs = backhairs;

    let shirts = this.add.group();
    this.shirts = shirts;

    let skirts = this.add.group();
    this.skirts = skirts;

    let pants = this.add.group();
    this.pants = pants;

    let acc1 = this.add.group();
    this.acc1 = acc1;

    let acc2 = this.add.group();
    this.acc2 = acc2;

    let acc3 = this.add.group();
    this.acc3 = acc3;

    let eyes = this.add.group();
    this.eyes = eyes;

    let eyebrows = this.add.group();
    this.eyebrows = eyebrows;

    let backgrounds = this.add.group();
    this.backgrounds = backgrounds;

    let noses = this.add.group();
    this.noses = noses;

    let mouths = this.add.group();
    this.mouths = mouths;

    let colors = this.add.group();
    this.colors = colors;

    let color_eyes = this.add.group();
    this.color_eyes = color_eyes;

    let ears = this.add.group();
    this.ears = ears;

    let color_shirt = this.add.group();
    this.color_shirt = color_shirt;

    let color_pants = this.add.group();
    this.color_pants = color_pants;

    let color_skirt = this.add.group();
    this.color_skirt = color_skirt;

    let color_acc2 = this.add.group();
    this.color_acc2 = color_acc2;

    this.assetdestroy = new Phaser.Events.EventEmitter();
    this.assetdestroy.on('destroy',()=>{
        this.tops.destroy(true);
        this.dress.destroy(true);
        this.hairs.destroy(true);
        this.backhairs.destroy(true);
        this.shirts.destroy(true);
        this.skirts.destroy(true);
        this.pants.destroy(true);
        this.acc1.destroy(true);
        this.acc2.destroy(true);
        this.acc3.destroy(true);
        this.eyes.destroy(true);
        this.eyebrows.destroy(true);
        this.noses.destroy(true);
        this.mouths.destroy(true);
        this.ears.destroy(true);
        this.color_eyes.destroy(true);
        this.backgrounds.destroy(true);
        this.color_shirt.destroy(true);
        this.color_pants.destroy(true);
        this.color_skirt.destroy(true);
        this.color_acc2.destroy(true);
    });
}



update(){
}
}

