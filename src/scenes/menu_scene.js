import { CST } from "../CST";

export class menu_scene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.MENU
        })
    }

    init(data){
        if(localStorage.getItem('start') != 1){
            localStorage.setItem('slot',0);
            this.slotstr = localStorage.getItem('slot');
            this.slotnum = parseInt(this.slotstr);
            localStorage.setItem('start', 1);
            localStorage.setItem('music_volume', 1);
            localStorage.setItem('sfx_volume', 1)
        }else if(localStorage.getItem('start') != 0){
            this.slotstr = localStorage.getItem('slot');
            this.slotnum = parseInt(this.slotstr);
        }

        this.enter_load = data.enter_load;
    }

    preload(){
    }

    create(){

        

        if (this.anims.exists('efx')){

        }else{
        let particle1 = this.anims.create({
            key: "efx",
            frameRate: 8,
            frames: this.anims.generateFrameNames("efx",{
                scale: 2.7,
                prefix: "particles_f",
                start: 1,
                end:5,
            }),
        });
    }

        if (this.anims.exists('efx2')){

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

        // Camera
        const cameraWidth = this.cameras.main.width
        const cameraHeight = this.cameras.main.height
        
        // Background
        let bg = this.add.image(0,0,"bg_menu2").setOrigin(0);
        bg.setScale(Math.max(cameraWidth / bg.width, cameraHeight / bg.height))


        // Music
        this.music = this.sound.add('musicaudio');
        this.music.setLoop(true);
        this.music.setMute(true);
        this.music.play();

        // Botones
        this.textinfo1 = this.add.text(this.game.renderer.width / 2, this.game.renderer.height * 0.60, "Saved Files: " + this.slotnum + "/999" , { fontSize: '42px', fill: '#ff0000' }).setOrigin(0.5);
        this.textinfo1.setDepth(16);
        this.textinfo1.setVisible(false);
    
        // SFX
        let tap1 = this.sound.add('tap1');
        let tap2 = this.sound.add('tap2');
        let tap3 = this.sound.add('tap3');
        let tap4 = this.sound.add('tap4');


        // Main Doll Sprite
        this.doll = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.62, "main_doll").setScale(1.1);


        // Movimiento de la muñeca
        this.tween = this.tweens.add({
            targets: this.doll,
            y: this.game.renderer.height * 0.50,
            ease: 'Sine.easeIn',
            duration: 500,
            paused: true
        });

        // Flags
        this.flag0 = 0;
        this.flag5 = 0;
        this.flag_load = 0;
        this.flag_lore = 0;
        this.flag_lock = 0;

        // timers
        this.timer1 = 0;
        this.timer2 = 0;

        // otros
        this.move_rightblock = 0;
        this.move_leftblock  = 0;

        // Logo Title
        this.titleimg = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.15, "title").setScale(2);


        // Play Button
        this.playButton = this.add.image(this.game.renderer.width * 0.81 , this.game.renderer.height * 0.57, "play_btn").setOrigin(0.5).setScale(0.8);
        this.playButton.setInteractive();

        this.tween2 = this.tweens.add({
            targets: this.playButton,
            scale: 1.4,
            ease: 'Sine.easeInOut',
            duration: 700,
            paused: true,
            alpha: {
                getStart: () => 1,
                getEnd: () => 0
            },
            onComplete: () => {
            let trans_efx1 = Phaser.GameObjects.Sprite = this.add.sprite(this.game.renderer.width / 2, this.game.renderer.height / 2,"transfx1",'trans1_f1');
            trans_efx1.play("transfx1");
            trans_efx1.setScale(2);
            trans_efx1.on('animationcomplete',()=>{
            let loading_face = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, 'loading_face');
            let load_text = this.add.text(this.game.renderer.width / 2, this.game.renderer.height * 0.65, 'Loading!', { fontSize: '52px', fill: '#ffffff' });
            })
        }
    });
        
        let effect = this.playButton.postFX.addGlow();
        effect.color = 0xffffff;
        effect.outerStrength = 30;  
        effect.innerStrength = 0;
        effect.knockout = false;
        effect.quality = 0.1;
        this.playButton.postFX.remove(effect);


        this.playButton.on("pointerover", () =>{
        this.playButton.postFX.add(effect);
    })


    this.playButton.on("pointerout", () =>{
    this.playButton.postFX.remove(effect);
    }) 
       
    if(localStorage.getItem('slot')<999){

    this.playButton.once("pointerdown", (pointer) =>{
        this.loadButton.destroy(true);
        tap1.play();

        this.tween2.play();
        let pimple = Phaser.GameObjects.Sprite = this.add.sprite(pointer.x, pointer.y,"efx",'particles_f1');
        pimple.play("efx");
        pimple.on('animationcomplete',()=>{
        pimple.destroy();
        })
    })
}

if(localStorage.getItem('slot') == 999){
    this.playButton.on("pointerdown", () =>{
    
    let info_txt = this.add.text(this.game.renderer.width / 2, this.game.renderer.height * 0.35, 'Slots Máximos (999/999)!', { fontSize: '38px', fill: '#FF0000' });
    info_txt.setDepth(50);
    info_txt.setOrigin(0.5);

    this.tweens.add({
        targets: info_txt,
        alpha: 0,
        y: '-=50', 
        duration: 1000, 
        onComplete: () => {
            info_txt.destroy();
        }
    });

})
}
    

    // Credits Button
    this.creditsButton = this.add.image(this.game.renderer.width * 0.02, this.game.renderer.height * 0.9, "credits_btn");
    this.creditsButton.setScale(1.4);
    this.creditsButton.setInteractive();
    this.creditsButton.setOrigin(0);

    this.creditsButton.on('pointerdown',()=>{
        let width = this.sys.game.config.width;
        let height = this.sys.game.config.height;

        let menurectangle = this.add.rectangle(width / 2, height / 2, width / 1.2, height / 1.5, 0x000000);
        menurectangle.setInteractive();
        menurectangle.setDepth(2);

        let textCreditsl1 = this.add.text(width / 2, height * 0.3, 'Programmed By:', { fontSize: '54px', color: 'yellow'});
        textCreditsl1.setOrigin(0.5);
        textCreditsl1.setDepth(2);

        let textCreditsl2 = this.add.text(width / 2, height * 0.4, 'Tenubar', { fontSize: '54px', color: 'white'});
        textCreditsl2.setOrigin(0.5);
        textCreditsl2.setDepth(2);

        let textCreditsl3 = this.add.text(width / 2, height * 0.55, 'Art By:', { fontSize: '54px', color: 'yellow'});
        textCreditsl3.setOrigin(0.5);
        textCreditsl3.setDepth(2);

        let textCreditsl4 = this.add.text(width / 2, height * 0.65, 'DLuci', { fontSize: '54px', color: 'white'});
        textCreditsl4.setOrigin(0.5);
        textCreditsl4.setDepth(2);

        // socials
        let xIcon1 = this.add.image(width * 0.76,height *0.4,'x_icon');
        xIcon1.setDepth(2);
        xIcon1.setScale(1.4);
        xIcon1.setInteractive();
        xIcon1.on('pointerdown',()=>{
            window.open('https://x.com/tenubar', '_blank');
        });

        let xIcon2 = this.add.image(width * 0.76,height *0.65,'x_icon');
        xIcon2.setDepth(2);
        xIcon2.setScale(1.4);
        xIcon2.setInteractive();
        xIcon2.on('pointerdown',()=>{
            window.open('https://x.com/dluci', '_blank');
        });

        let flagscreen = this.add.rectangle(0, 0, width, height, 0x000000);
        flagscreen.setAlpha(0.01);
        flagscreen.setDepth(1);
        flagscreen.setInteractive();
        flagscreen.setOrigin(0);

        flagscreen.on('pointerdown',()=>{
            menurectangle.destroy();
            textCreditsl1.destroy();
            textCreditsl2.destroy();
            textCreditsl3.destroy();
            textCreditsl4.destroy();
            xIcon1.destroy();
            xIcon2.destroy();
            flagscreen.destroy();
        });
        
    });


    // Load Button
    this.loadButton = this.add.image(this.game.renderer.width * 0.82, this.game.renderer.height * 0.72, "load_btn").setOrigin(0.5);
    this.loadButton.setScale(1.4);
    this.loadButton.setInteractive();
    this.loadButton.on('pointerdown',function(pointer){
    if(this.flag_load === 0){   
    this.playButton.destroy();
    this.creditsButton.destroy();

    // Transition to Load Screen


    // Load Screen    
    this.tween7 = this.tweens.add({
    targets: this.loadButton,
    scale: 2.2,
    ease: 'Sine.easeInOut',
    duration: 300,
    paused: true,
    alpha: {
        getStart: () => 1,
        getEnd: () => 0
    },
    onComplete: (pointer) => {

    let transition_gph = this.add.image(this.game.renderer.width,0,"transition1").setOrigin(0).setScale(1.4,1);
    
    this.tween8 = this.tweens.add({
        targets: this.doll,
        x: this.game.renderer.width * -1,
        ease: 'Sine.easeInOut',
        duration: 300,
        paused: true,
        onComplete: () => {
            this.doll.destroy(true);
        }
    })
    
    this.tween9 = this.tweens.add({
        targets: transition_gph,
        x: this.game.renderer.width * -1.4,
        ease: 'Sine.easeInOut',
        duration: 300,
        paused: true,
        onComplete: () => {
            transition_gph.destroy();
        }
    })

    this.tween10 = this.tweens.add({
        targets: this.titleimg,
        x: this.game.renderer.width * -1,
        ease: 'Sine.easeInOut',
        duration: 300,
        paused: true,
        onComplete: () => {
            this.titleimg.destroy(true);
        }
    })

    this.tween11 = this.tweens.add({
        targets: bg,
        x: -80,
        ease: 'Sine.easeInOut',
        duration: 300,
        paused: true,
    })

    
    this.tween8.play();
    this.tween9.play();
    this.tween10.play();
    this.tween11.play();



    this.layer1 = this.add.container(0, -55);
    this.layer1.setDepth(21);

    this.layer2 = this.add.container(0, 0);
    this.layer2.setDepth(22);

    this.layer3 = this.add.container(0, 0);
    this.layer3.setDepth(23);

    this.layer4 = this.add.container(0, 0);
    this.layer4.setDepth(24);

    this.layer5 = this.add.container(0, 0);
    this.layer5.setDepth(25);

    this.layer6 = this.add.container(0, 0);
    this.layer6.setDepth(26);

    this.layer7 = this.add.container(0, 0);
    this.layer7.setDepth(27);

    this.layer8 = this.add.container(0, 0);
    this.layer8.setDepth(28);

    this.layer9 = this.add.container(0, 0);
    this.layer9.setDepth(29);

    this.layer10 = this.add.container(0, 0);
    this.layer10.setDepth(30);

    this.layer11 = this.add.container(0, 0);
    this.layer11.setDepth(31);

    this.layer12 = this.add.container(0, 0);
    this.layer12.setDepth(32);

    this.layer15 = this.add.container(0, 0);
    this.layer15.setDepth(15);

    this.layer17 = this.add.container(0, 0);
    this.layer17.setDepth(37);

    this.layer18 = this.add.container(0, 0);
    this.layer18.setDepth(38);

    this.layer19 = this.add.container(0, 0);
    this.layer19.setDepth(39);

    this.layer20 = this.add.container(0, 0);
    this.layer20.setDepth(50);


    // this.titleimg.destroy();
    // this.doll.destroy();
    this.playButton.destroy();
    // this.loadButton.setVisible(false);


    // Assets
    this.menuback = this.add.image(12, this.game.renderer.height * 0.04,"menu_btn").setOrigin(0).setScale(1.5);
    this.menuback.setInteractive();
    this.menuback.setDepth(50);
    this.menuback.setVisible(false);
    this.menuback.on('pointerdown',()=>{

    

    let trans_efx1 = Phaser.GameObjects.Sprite = this.add.sprite(this.game.renderer.width / 2, this.game.renderer.height / 2,"transfx1",'trans1_f1');
    trans_efx1.play("transfx1");
    trans_efx1.setScale(2);
    trans_efx1.setDepth(99);
    trans_efx1.on('animationcomplete',()=>{
    let inputs = document.getElementsByClassName('inputs');
    // Remove the elements
    while(inputs.length > 0){
    inputs[0].parentNode.removeChild(inputs[0]);
    } 
    this.scene.start(CST.SCENES.MENU,{enter_load: 0});
    })

})
    

    this.bottom_menu = this.add.image(this.game.renderer.width,this.game.renderer.height * 0.65, 'bottom_menu').setOrigin(0);
    this.bottom_menu.setDepth(12);

    this.tween5 = this.tweens.add({
        targets: this.bottom_menu,
        ease: 'Sine.easeInOut',
        x: 0,
        duration: 300,
        paused: true,
        alpha: {
        getStart: () => 0,
        getEnd: () => 1
        },
        onComplete: () => {
            more_btn.setVisible(true);
            less_btn.setVisible(true);
            this.menuback.setVisible(true);
            this.textinfo1.setVisible(true);
        }
});
this.tween5.play();

    // Añade un timer para:

    this.frameload = this.add.image(20, this.game.renderer.height * 0.65,'frameload').setOrigin(0);
    // this.frameload = this.add.image(this.game.renderer.width, this.game.renderer.height * 0.65,'frameload').setOrigin(0);
    this.frameload.setDepth(17);
    this.frameload.setVisible(false);

    let more_btn = this.add.image(this.game.renderer.width * 0.90, this.game.renderer.height * 0.55, 'right_arrow1').setOrigin(0).setScale(2);
    more_btn.setDepth(40);
    more_btn.setInteractive();
    more_btn.setVisible(false);

    let less_btn = this.add.image(10, this.game.renderer.height * 0.55, 'left_arrow1').setOrigin(0).setScale(2);
    less_btn.setDepth(40);
    less_btn.setInteractive();
    less_btn.setVisible(false);
    
    let recycle_btn = this.add.image(35, this.game.renderer.height * 0.66,'recycle2').setOrigin(0);
    recycle_btn.setVisible(false);
    recycle_btn.setScale(2);
    recycle_btn.setDepth(40);
    recycle_btn.setInteractive();

    recycle_btn.on('pointerdown',()=>{
    if(this.flag5===0){
    let width = this.sys.game.config.width;
    let height = this.sys.game.config.height;
    let rectangle = this.add.rectangle(width / 2, height / 2, width, height, 0x000000);
    let rectangle2 = this.add.rectangle(width / 2, height / 2, width / 1.2, height / 3, 0x000000);
    rectangle.setAlpha(0.5);
    rectangle.setDepth(40);
    rectangle2.setDepth(41);
        
    // Texto
    let textconfirm = this.add.text(width / 2, height / 2.5, "Delete This Girl?", { fontSize: '42px', fill: '#ffffff' }).setOrigin(0.5);
    textconfirm.setDepth(42);
    
    let yes_btn = this.add.image(width / 2.2, height / 1.8,'yes_btn').setOrigin(1,0.5).setDepth(42).setScale(1.5);
    yes_btn.setInteractive();
    yes_btn.on('pointerdown',()=>{

        this.flag_load = 0;

        let dress_local = [];
        let top_local = [];
        let hair_local = [];
        let backhair_local = [];
        let shirt_local = [];
        let skirt_local = [];
        let pants_local = [];
        let acc1_local = [];
        let acc2_local = [];
        let acc3_local = [];

        let eye_local = [];
        let eye1_local = [];

        let eyebrow_local = [];
        let background_local = [];
        let skin_local = [];
        let nose_local = [];
        let mouth_local = [];
        let ear_local = [];

        // Posiciones
        let dressxpos_local = [];
        let dressypos_local = [];
        let shirtxpos_local = [];
        let shirtypos_local = [];
        let skirtxpos_local = [];
        let skirtypos_local = [];
        let pantsxpos_local = [];
        let pantsypos_local = [];

        // Manhattan
        let dressxmanh_local = [];
        let dressymanh_local = [];
        let shirtxmanh_local = [];
        let shirtymanh_local = [];
        let skirtxmanh_local = [];
        let skirtymanh_local = [];
        let pantsxmanh_local = [];
        let pantsymanh_local = [];


        // Inputs

        let input_local = [];
        let bio_local = [];
        let note_local = [];

        // Flags
        let shirtflag_local = [];

        // Variaciones de Colores

        let shirtvar1_local = [];
        let shirtvar2_local = [];
        let shirtvar3_local = [];
        let shirtvar4_local = [];

        let pantsvar1_local = [];
        let pantsvar2_local = [];
        let pantsvar3_local = [];
        let pantsvar4_local = [];

        let skirtvar1_local = [];
        let skirtvar2_local = [];
        let skirtvar3_local = [];

        let acc2var1_local = [];
        let acc2var2_local = [];
        let acc2var3_local = [];


        if(localStorage.getItem('slot') > 0){

            let id_del = this.slotnum - recycle_btn.id;

            // Guardar datos de los Slots siguientes (Check)
            for(let i = 0; i < id_del; i++){
                let ide = (recycle_btn.id + 1) + i;
                dress_local.push([localStorage.getItem('dress_id' + ide)]);
                top_local.push([localStorage.getItem('top_id' + ide)]);
                hair_local.push([localStorage.getItem('hair_id' + ide)]);
                backhair_local.push([localStorage.getItem('backhair_id' + ide)]);
                shirt_local.push([localStorage.getItem('shirt_id' + ide)]);
                skirt_local.push([localStorage.getItem('skirt_id' + ide)]);
                pants_local.push([localStorage.getItem('pants_id' + ide)]);
                acc1_local.push([localStorage.getItem('acc1_id' + ide)]);
                acc2_local.push([localStorage.getItem('acc2_id' + ide)]);
                acc3_local.push([localStorage.getItem('acc3_id' + ide)]);

                eye1_local.push([localStorage.getItem('eye1_id' + ide)]);
                eye_local.push([localStorage.getItem('eye_id' + ide)]);

                eyebrow_local.push([localStorage.getItem('eyebrow_id' + ide)]);
                background_local.push([localStorage.getItem('background_id' + ide)]);
                skin_local.push([localStorage.getItem('skin_id' + ide)]);
                nose_local.push([localStorage.getItem('nose_id' + ide)]);
                mouth_local.push([localStorage.getItem('mouth_id' + ide)]);
                ear_local.push([localStorage.getItem('ear_id' + ide)]);

                // Positions
                dressxpos_local.push([localStorage.getItem('dressxpos' + ide)]);
                dressypos_local.push([localStorage.getItem('dressypos' + ide)]);
                shirtxpos_local.push([localStorage.getItem('shirtxpos' + ide)]);
                shirtypos_local.push([localStorage.getItem('shirtypos' + ide)]);
                skirtxpos_local.push([localStorage.getItem('skirtxpos' + ide)]);
                skirtypos_local.push([localStorage.getItem('skirtypos' + ide)]);
                pantsxpos_local.push([localStorage.getItem('pantsxpos' + ide)]);
                pantsypos_local.push([localStorage.getItem('pantsypos' + ide)]);

                // Manhattan
                dressxmanh_local.push([localStorage.getItem('dressxmanh' + ide)]);
                dressymanh_local.push([localStorage.getItem('dressymanh' + ide)]);
                shirtxmanh_local.push([localStorage.getItem('shirtxmanh' + ide)]);
                shirtymanh_local.push([localStorage.getItem('shirtymanh' + ide)]);
                skirtxmanh_local.push([localStorage.getItem('skirtxmanh' + ide)]);
                skirtymanh_local.push([localStorage.getItem('skirtymanh' + ide)]);
                pantsxmanh_local.push([localStorage.getItem('pantsxmanh' + ide)]);
                pantsymanh_local.push([localStorage.getItem('pantsymanh' + ide)]);

                // Inputs
                input_local.push([localStorage.getItem('input' + ide)]);
                bio_local.push([localStorage.getItem('bio_id' + ide)]);
                note_local.push([localStorage.getItem('note_id' + ide)]);

                // Flags
                shirtflag_local.push([localStorage.getItem('shirt_flag' + ide)]);
                
                // Shirt Color Var
                shirtvar1_local.push([localStorage.getItem('shirt_var1_' + ide)]);
                shirtvar2_local.push([localStorage.getItem('shirt_var2_' + ide)]);
                shirtvar3_local.push([localStorage.getItem('shirt_var3_' + ide)]);
                shirtvar4_local.push([localStorage.getItem('shirt_var4_' + ide)]);

                // pants Color Var
                pantsvar1_local.push([localStorage.getItem('pants_var1_' + ide)]);
                pantsvar2_local.push([localStorage.getItem('pants_var2_' + ide)]);
                pantsvar3_local.push([localStorage.getItem('pants_var3_' + ide)]);
                pantsvar4_local.push([localStorage.getItem('pants_var4_' + ide)]);

                // Skirt Color Var
                skirtvar1_local.push([localStorage.getItem('skirt_var1_' + ide)]);
                skirtvar2_local.push([localStorage.getItem('skirt_var2_' + ide)]);
                skirtvar3_local.push([localStorage.getItem('skirt_var3_' + ide)]);

                // Acc2 Color Var
                acc2var1_local.push([localStorage.getItem('acc2_var1_' + ide)]);
                acc2var2_local.push([localStorage.getItem('acc2_var2_' + ide)]);
                acc2var3_local.push([localStorage.getItem('acc2_var3_' + ide)]);
            }

            // Eliminar Slots desde el Seleccionado en Adelante (Check)
            for(let i = 0; i<id_del + 1;i++){
                let ide2 = recycle_btn.id + i;
                localStorage.removeItem('dress_id' + ide2);
                localStorage.removeItem('top_id' + ide2);
                localStorage.removeItem('hair_id' + ide2);
                localStorage.removeItem('backhair_id' + ide2);
                localStorage.removeItem('shirt_id' + ide2);
                localStorage.removeItem('skirt_id' + ide2); 
                localStorage.removeItem('pants_id' + ide2);
                localStorage.removeItem('acc1_id' + ide2);
                localStorage.removeItem('acc2_id' + ide2);
                localStorage.removeItem('acc3_id' + ide2);

                localStorage.removeItem('eye1_id' + ide2);
                localStorage.removeItem('eye_id' + ide2);

                localStorage.removeItem('eyebrow_id' + ide2);
                localStorage.removeItem('background_id' + ide2);
                localStorage.removeItem('skin_id' + ide2);
                localStorage.removeItem('nose_id' + ide2);
                localStorage.removeItem('mouth_id' + ide2);
                localStorage.removeItem('ear_id' + ide2);

                // Positions
                localStorage.removeItem('dressxpos' + ide2);
                localStorage.removeItem('dressypos' + ide2);
                localStorage.removeItem('shirtxpos' + ide2);
                localStorage.removeItem('shirtypos' + ide2);
                localStorage.removeItem('skirtxpos' + ide2);
                localStorage.removeItem('skirtypos' + ide2);
                localStorage.removeItem('pantsxpos' + ide2);
                localStorage.removeItem('pantsypos' + ide2);

                // Manhattan
                localStorage.removeItem('dressxmanh' + ide2);
                localStorage.removeItem('dressymanh' + ide2);
                localStorage.removeItem('shirtxmanh' + ide2);
                localStorage.removeItem('shirtymanh' + ide2);
                localStorage.removeItem('skirtxmanh' + ide2);
                localStorage.removeItem('skirtymanh' + ide2);
                localStorage.removeItem('pantsxmanh' + ide2);
                localStorage.removeItem('pantsymanh' + ide2);

                // Inputs
                localStorage.removeItem('input' + ide2);
                localStorage.removeItem('bio_id' + ide2);
                localStorage.removeItem('note_id' + ide2);

                // Flags
                localStorage.removeItem('shirt_flag' + ide2);

                // Shirt Color Var
                localStorage.removeItem('shirt_var1_' + ide2);
                localStorage.removeItem('shirt_var2_' + ide2);
                localStorage.removeItem('shirt_var3_' + ide2);
                localStorage.removeItem('shirt_var4_' + ide2);

                // Pants Color Var
                localStorage.removeItem('pants_var1_' + ide2);
                localStorage.removeItem('pants_var2_' + ide2);
                localStorage.removeItem('pants_var3_' + ide2);
                localStorage.removeItem('pants_var4_' + ide2);

                // Skirt Color Var
                localStorage.removeItem('skirt_var1_' + ide2);
                localStorage.removeItem('skirt_var2_' + ide2);
                localStorage.removeItem('skirt_var3_' + ide2);

                // ACC2 Color Var
                localStorage.removeItem('acc2_var1_' + ide2);
                localStorage.removeItem('acc2_var2_' + ide2);
                localStorage.removeItem('acc2_var3_' + ide2);

                // Eye Color Var (Necesita Mejora)

            }

            // Se Disminuye 1 Punto la Cantidad de Slots (Check)
            this.slotnum--;

            // Se Crean Slots desde el seleccionado en Adelante Menos 1
            for(let i = 0; i < id_del; i++){
                let ide3 = recycle_btn.id + i;
                localStorage.setItem('dress_id' + ide3, dress_local[i]);
                localStorage.setItem('top_id' + ide3, top_local[i]);
                localStorage.setItem('hair_id' + ide3, hair_local[i]);
                localStorage.setItem('backhair_id' + ide3, backhair_local[i]);
                localStorage.setItem('shirt_id' + ide3, shirt_local[i]);
                localStorage.setItem('skirt_id' + ide3, skirt_local[i]);
                localStorage.setItem('pants_id' + ide3, pants_local[i]);
                localStorage.setItem('acc1_id' + ide3, acc1_local[i]);
                localStorage.setItem('acc2_id' + ide3, acc2_local[i]);
                localStorage.setItem('acc3_id' + ide3, acc3_local[i]);

                localStorage.setItem('eye1_id' + ide3, eye1_local[i]);
                localStorage.setItem('eye_id' + ide3, eye_local[i]);

                localStorage.setItem('eyebrow_id' + ide3, eyebrow_local[i]);
                localStorage.setItem('background_id' + ide3, background_local[i]);
                localStorage.setItem('skin_id' + ide3, skin_local[i]);
                localStorage.setItem('nose_id' + ide3, nose_local[i]);
                localStorage.setItem('mouth_id' + ide3, mouth_local[i]);
                localStorage.setItem('ear_id' + ide3, ear_local[i]);

                // Positions
                localStorage.setItem('dressxpos' + ide3, dressxpos_local[i]);
                localStorage.setItem('dressypos' + ide3, dressypos_local[i]);
                localStorage.setItem('shirtxpos' + ide3, shirtxpos_local[i]);
                localStorage.setItem('shirtypos' + ide3, shirtypos_local[i]);
                localStorage.setItem('skirtxpos' + ide3, skirtxpos_local[i]);
                localStorage.setItem('skirtypos' + ide3, skirtypos_local[i]);
                localStorage.setItem('pantsxpos' + ide3, skirtxpos_local[i]);
                localStorage.setItem('pantsypos' + ide3, skirtypos_local[i]);

                // Manhattan
                localStorage.setItem('dressxmanh' + ide3, dressxmanh_local[i]);
                localStorage.setItem('dressymanh' + ide3, dressymanh_local[i]);
                localStorage.setItem('shirtxmanh' + ide3, shirtxmanh_local[i]);
                localStorage.setItem('shirtymanh' + ide3, shirtymanh_local[i]);
                localStorage.setItem('skirtxmanh' + ide3, skirtxmanh_local[i]);
                localStorage.setItem('skirtymanh' + ide3, skirtymanh_local[i]);
                localStorage.setItem('pantsxmanh' + ide3, skirtxmanh_local[i]);
                localStorage.setItem('pantsymanh' + ide3, skirtymanh_local[i]);

                // Inputs
                localStorage.setItem('input' + ide3, input_local[i]);
                localStorage.setItem('bio_id' + ide3, bio_local[i]);
                localStorage.setItem('note_id' + ide3, note_local[i]);

                // Flags
                localStorage.setItem('shirt_flag' + ide3, shirtflag_local[i]);

                // Shirt Color Var
                localStorage.setItem('shirt_var1_' + ide3, shirtvar1_local[i]);
                localStorage.setItem('shirt_var2_' + ide3, shirtvar2_local[i]);
                localStorage.setItem('shirt_var3_' + ide3, shirtvar3_local[i]);
                localStorage.setItem('shirt_var4_' + ide3, shirtvar4_local[i]);

                // Pants Color Var
                localStorage.setItem('pants_var1_' + ide3, pantsvar1_local[i]);
                localStorage.setItem('pants_var2_' + ide3, pantsvar2_local[i]);
                localStorage.setItem('pants_var3_' + ide3, pantsvar3_local[i]);
                localStorage.setItem('pants_var4_' + ide3, pantsvar4_local[i]);

                // Skirt Color Var
                localStorage.setItem('skirt_var1_' + ide3, skirtvar1_local[i]);
                localStorage.setItem('skirt_var2_' + ide3, skirtvar2_local[i]);
                localStorage.setItem('skirt_var3_' + ide3, skirtvar3_local[i]);

                // ACC2 Color Var
                localStorage.setItem('acc2_var1_' + ide3, acc2var1_local[i]);
                localStorage.setItem('acc2_var2_' + ide3, acc2var2_local[i]);
                localStorage.setItem('acc2_var3_' + ide3, acc2var3_local[i]);
             }
        }
        

        // Numero de Slots
        localStorage.setItem('slot', localStorage.getItem('slot') - 1);

        rectangle.destroy();
        rectangle2.destroy();
        textconfirm.destroy();
        yes_btn.destroy();
        no_btn.destroy();

        
        this.layer1.destroy();
        this.layer2.destroy();
        this.layer3.destroy();
        this.layer4.destroy();
        this.layer5.destroy();
        this.layer6.destroy();
        this.layer7.destroy();
        this.layer8.destroy();
        this.layer9.destroy();
        this.layer10.destroy();
        this.layer11.destroy();
        this.layer12.destroy();
        this.layer17.destroy();
        this.layer18.destroy();
        this.layer19.destroy();

        let inputs = document.getElementsByClassName('inputs');
        // Remove the elements
    
        while(inputs.length > 0){
            inputs[0].parentNode.removeChild(inputs[0]);
        } 


        this.frameload.destroy();

        doll.destroy();
        dress.destroy();
        top.destroy();
        hair.destroy();
        backhair.destroy();
        shirt.destroy();
        skirt.destroy();
        pants.destroy();
        acc1.destroy();
        acc2.destroy();
        acc3.destroy();
        eye1.destroy();
        eyebrow.destroy();
        background.destroy();
        nose.destroy();
        mouth.destroy();
        ear.destroy();
        recycle_btn.destroy();
        this.layer15.destroy();
        this.addnew.destroy();
        this.lore.setVisible(false);
        this.playload.setVisible(false);

        this.loadButton.emit('pointerdown', pointer);
        this.textinfo1.setText("Saved Files: " + this.slotnum + "/999" , { fontSize: '42px', fill: '#ff0000'});

        this.tween7.complete();
        this.tween8.complete();
        this.tween9.complete();
        this.tween10.complete();
        this.tween11.complete();

        this.flag5 = 0;

        this.edit_icon = document.getElementById('edit_qty');
        this.edit_icon.innerHTML = Number(Math.max(localStorage.getItem('slot'),0));

    })



    let no_btn= this.add.image(width / 1.8, height / 1.8,'no_btn').setOrigin(0,0.5).setDepth(42).setScale(1.5);
    no_btn.setInteractive();
    no_btn.on('pointerdown',()=>{
    rectangle.destroy();
    rectangle2.destroy();
    textconfirm.destroy();
    yes_btn.destroy();
    no_btn.destroy();

  


    this.flag5 = 0;
    })
    this.flag5 = 1;
    }
})

    this.playload = this.add.image(this.game.renderer.width * 0.74, this.game.renderer.height * 0.04,"playload").setOrigin(0).setScale(1.5);
    this.playload.setVisible(false);
    this.playload.setDepth(50);

    this.lore = this.add.image(this.game.renderer.width * 0.82, this.game.renderer.height * 0.15,"lore_btn").setOrigin(0).setScale(1.3);
    this.lore.setVisible(false);
    this.lore.setDepth(50);




    if (this.anims.exists('dollskin')){

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

    let doll = Phaser.GameObjects.Sprite = this.add.sprite(this.game.renderer.width / 2, this.game.renderer.height * 0.42,"dollskin",'doll_skin1');
    doll.setDepth(4);
    doll.setVisible(false);
    doll.play("dollskin");
    doll.anims.pause();
    doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[1]);

    // Dresses
    let dress = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.42,"dress_1")
    dress.setVisible(false);
    dress.setDepth(10);

    // Top
    let top = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.42,"top_1")
    top.setVisible(false);
    top.setDepth(4);

    // Hair
    let hair = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.42,"hair_1")
    hair.setVisible(false);
    hair.setDepth(10);

    // BackHair
    let backhair = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.42,"backhair_1")
    backhair.setVisible(false);
    backhair.setDepth(3);

    // Shirt 
    let shirt = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.42,"shirt_1_1")
    shirt.setVisible(false);
    shirt.setDepth(9);

    // Skirt 
    let skirt = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.42,"skirt_1_1")
    skirt.setVisible(false);
    skirt.setDepth(6);

    // Pants
    let pants = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.42,"pants_1_1")
    pants.setVisible(false);
    pants.setDepth(5);

    // ACC 1
    let acc1 = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.42,"strains_1")
    acc1.setVisible(false);
    acc1.setDepth(11); 

    // ACC 2
    let acc2 = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.42,"acc2_1_1")
    acc2.setVisible(false);
    acc2.setDepth(12); 

    // ACC 3
    let acc3 = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.42,"acc3_1")
    acc3.setVisible(false);
    acc3.setDepth(2);

    // Eyes
    let eye1 = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.42,"eye1_1")
    eye1.setVisible(false);
    eye1.setDepth(7);

    // EyeBrows
    let eyebrow = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.42,"eyebrow_1")
    eyebrow.setVisible(false);
    eyebrow.setDepth(8);

    // Background
    let background = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.42,"background_0")
    background.setScale(1.6);
    background.setVisible(false);
    background.setDepth(1);

    // Noses
    let nose = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.42,"nose_1")
    nose.setVisible(false);
    nose.setDepth(5);

    // Mouths
    let mouth = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.42,"mouth_1")
    mouth.setVisible(false);
    mouth.setDepth(5);

    // Ears
    let ear = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.42,"ear_2")
    ear.setVisible(false);
    ear.setDepth(19);

    

    // Existentes Doll Gráficos en Grande
    if(this.slotnum > 0){
    for(let i=0; i<this.slotnum;i++){

    let loadslot = this.add.image(this.game.renderer.width + (i * 220), this.game.renderer.height * 0.65,'load_doll').setOrigin(0);
    loadslot.setDepth(15);
    this.loadslot = loadslot;

        // Transición Derecha a Izquierda

        this.tween3 = this.tweens.add({
            targets: loadslot,
            ease: 'Sine.easeInOut',
            x: 20 + (i * 220),
            duration: 300,
            paused: true,
            alpha: {
            getStart: () => 0,
            getEnd: () => 1
            },
            onComplete: () => {
                loadslot.setInteractive();
            }
    });

    this.tween3.play();

    this.layer15.add(loadslot);
    loadslot.myValue = i + 1;
    this.flag3 = Math.floor((i + 1) / 3);
    this.flag4 = 0;

    
    loadslot.on('pointerdown',()=>{

    if(this.flag_lore===0){
    this.cur_slot = loadslot.myValue;
    this.frameload.x = loadslot.x;
    this.frameload.y = loadslot.y;
    recycle_btn.x = loadslot.x + 162;
    recycle_btn.y = loadslot.y + 12;
    recycle_btn.id = loadslot.myValue;
    

    this.frameload.setVisible(true);
    recycle_btn.setVisible(true);
    this.playload.setVisible(true);
    this.lore.setVisible(true);

    // Doll
    doll.setVisible(true);

    // Cargar Apariencia 
    dress.setVisible(false);
    top.setVisible(false);
    hair.setVisible(false);
    backhair.setVisible(false);
    shirt.setVisible(false);
    skirt.setVisible(false);
    pants.setVisible(false);
    acc1.setVisible(false);
    acc2.setVisible(false);
    acc3.setVisible(false);
    eye1.setVisible(false);
    eyebrow.setVisible(false);
    background.setVisible(false);
    nose.setVisible(false);
    mouth.setVisible(false);
    ear.setVisible(false);

    // Doll Skin

    doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[localStorage.getItem('skin_id' + this.cur_slot)]);

    // Dress
    if(localStorage.getItem('dress_id' + this.cur_slot) > 0){
    dress.setTexture("dress_" + localStorage.getItem('dress_id' + this.cur_slot));
    // dress.setPosition(localStorage.getItem('dressxpos' + this.cur_slot), localStorage.getItem('dressypos' + this.cur_slot))
    dress.setVisible(true);
    dress.setDepth(10);
    }

    // Top
    if(localStorage.getItem('top_id' + this.cur_slot) > 0){
    top.setTexture("top_" + localStorage.getItem('top_id' + this.cur_slot));
    top.setVisible(true);
    top.setDepth(4);
    }

    // Hair
    if(localStorage.getItem('hair_id' + this.cur_slot) > 0){
    hair.setTexture("hair_" + localStorage.getItem('hair_id' + this.cur_slot));
    hair.setVisible(true);
    hair.setDepth(12);
    }

    // BackHair
    if(localStorage.getItem('backhair_id' + this.cur_slot) > 0){
    backhair.setTexture("backhair_" + localStorage.getItem('backhair_id' + this.cur_slot));
    backhair.setVisible(true);
    backhair.setDepth(3);
    }

    // Shirt
    if(localStorage.getItem('shirt_id' + this.cur_slot) > 0){
    shirt.setTexture("shirt_" + localStorage.getItem('shirt_id' + this.cur_slot) + "_" + Number(localStorage.getItem('shirt_var' + localStorage.getItem('shirt_id' + this.cur_slot) + "_" + this.cur_slot)));
    let shirt_flag = localStorage.getItem('shirt_flag' + this.cur_slot);
    shirt.setVisible(true);
    shirt.setDepth(9 - (shirt_flag * 5));
    }

    // skirt
    if(localStorage.getItem('skirt_id' + this.cur_slot) > 0){
    skirt.setTexture("skirt_" + localStorage.getItem('skirt_id' + this.cur_slot) + "_" + Number(localStorage.getItem('skirt_var' + localStorage.getItem('skirt_id' + this.cur_slot) + "_" + this.cur_slot)));
    skirt.setVisible(true);
    skirt.setDepth(5);
    }
    
    // Pants
    if(localStorage.getItem('pants_id' + this.cur_slot) > 0){
    pants.setTexture("pants_" + localStorage.getItem('pants_id' + this.cur_slot) + "_" + Number(localStorage.getItem('pants_var' + localStorage.getItem('pants_id' + this.cur_slot) + "_" + this.cur_slot)));
    pants.setVisible(true);
    pants.setDepth(6);
    }
            
    // ACC 1
    if(localStorage.getItem('acc1_id' + this.cur_slot) > 0){
    acc1.setTexture("strains_" + localStorage.getItem('acc1_id' + this.cur_slot));
    acc1.setVisible(true);
    acc1.setDepth(11); 
    }

    // ACC 2
    if(localStorage.getItem('acc2_id' + this.cur_slot) > 0){
    acc2.setTexture("acc2_" + localStorage.getItem('acc2_id' + this.cur_slot) + "_" + Number(localStorage.getItem('acc2_var' + localStorage.getItem('acc2_id' + this.cur_slot) + "_" + this.cur_slot)));
    acc2.setVisible(true);
    acc2.setDepth(10); 
    }

    // ACC 3
    if(localStorage.getItem('acc3_id' + this.cur_slot) > 0){
    acc3.setTexture("acc3_" + localStorage.getItem('acc3_id' + this.cur_slot));
    acc3.setVisible(true);
    acc3.setDepth(2);
    }

    // Eyes
    if(localStorage.getItem('eye1_id' + this.cur_slot) > 0){
    eye1.setTexture("eye1_" + localStorage.getItem('eye1_id' + this.cur_slot));
    eye1.setVisible(true);
    eye1.setDepth(7);
    }

    // Eyebrow
    if(localStorage.getItem('eyebrow_id' + this.cur_slot) > 0){
    eyebrow.setTexture("eyebrow_" + localStorage.getItem('eyebrow_id' + this.cur_slot));
    eyebrow.setVisible(true);
    eyebrow.setDepth(8);
    }

    // Backgrounds
    if(localStorage.getItem('background_id' + this.cur_slot) > 0){
    background.setTexture("background_" + localStorage.getItem('background_id' + this.cur_slot));
    background.setVisible(true);
    background.setDepth(1);
    }

    // Nose
    if(localStorage.getItem('nose_id' + this.cur_slot) > 0){
    nose.setTexture("nose_" + localStorage.getItem('nose_id' + this.cur_slot));
    nose.setVisible(true);
    nose.setDepth(5);
    }

    // Mouth
    if(localStorage.getItem('mouth_id' + this.cur_slot) > 0){
    mouth.setTexture("mouth_" + localStorage.getItem('mouth_id' + this.cur_slot));
    mouth.setVisible(true);
    mouth.setDepth(5);
    }

    // Ear
    if(localStorage.getItem('ear_id' + this.cur_slot) > 1){

    let num = Number(localStorage.getItem('skin_id' + this.cur_slot))
    let curskin = Number(num + 1)

    ear.setTexture("ear" + localStorage.getItem('ear_id' + this.cur_slot) + "_" + curskin);
    ear.setVisible(true);
    ear.setDepth(4);
    }
}
})




    more_btn.on('pointerdown',()=>{
    if(this.flag3>0){
    loadslot.x = loadslot.x - 660;
    recycle_btn.x =  recycle_btn.x - 660
    }
    })

    less_btn.on('pointerdown',()=>{
    if(this.flag4>0){
    loadslot.x = loadslot.x + 660;
    recycle_btn.x =  recycle_btn.x + 660
    }
    }) 
    }
}

this.playload.setInteractive();
this.playload.once('pointerdown',()=>{
let inputs = document.getElementsByClassName('inputs');
// Remove the elements

while(inputs.length > 0){
    inputs[0].parentNode.removeChild(inputs[0]);
} 
this.scene.start(CST.SCENES.GAMES, { music: this.music, slot_no: this.slotnum, slot_cur: this.cur_slot, load_true: 1 });
})





    for(let i = 0; i<Math.min(this.slotnum,3);i++){

    let number = Number(i + 1);
     // Inputs

     
    // let inputField = this.add.dom(28 + (i * 220), this.game.renderer.height * 0.937, 'input','width:194px; height:36px; font-size:26px; text-align: center; border: 2px solid black; background: transparent; outline: none;');
    let inputField = this.add.dom(this.game.renderer.width, this.game.renderer.height * 0.937, 'input','width:194px; height:36px; font-size:26px; text-align: center; border: 2px solid black; background: transparent; outline: none;');
    inputField.setOrigin(0);
    inputField.node.type = 'text';
    inputField.node.value = localStorage.getItem('input' + number);
    inputField.node.id = number;
    inputField.node.classList.add('inputs');
    inputField.node.maxLength = '12';

    this.layer20.add(inputField);


    this.tween6 = this.tweens.add({
        targets: inputField,
        ease: 'Sine.easeInOut',
        x: 28 + (i * 220),
        duration: 300,
        paused: true,
        alpha: {
        getStart: () => 0,
        getEnd: () => 1
        },
        onComplete: () => {

        }
});
this.tween6.play();
    

     this.input.on('pointerup',()=>{
         inputField.node.blur();
     })


 more_btn.on('pointerdown',()=>{
        if(this.flag3>0){
        let aux = Number(number + (3 * (this.flag4 + 1)));
        inputField.node.value = localStorage.getItem('input' + aux );
        inputField.node.id = aux;
        if(aux>this.slotnum){
             inputField.node.style.visibility = 'hidden';
        }else if(aux<this.slotnum){
             inputField.node.style.visibility = 'visible';
        }
    }
 })

 less_btn.on('pointerdown',()=>{
    if(this.flag4>0){
    let aux2 = Number(number + (3 * (this.flag4)) - 3)
    inputField.node.value = localStorage.getItem('input' + aux2 );
    inputField.node.id = aux2;
    if(aux2-1>this.slotnum){
    inputField.node.style.visibility = 'hidden';
    }else if(aux2-1<this.slotnum){
    inputField.node.style.visibility = 'visible';
    }
    }
})


inputField.node.addEventListener('keyup', function() {
     localStorage.setItem('input' + inputField.node.id, inputField.node.value);
});


}

// Lore Button
this.lore.setInteractive();
this.lore.on('pointerdown',()=>{

    if(this.flag5===0){
    this.menuback.setVisible(false);
    this.playload.setVisible(false);
    this.lore.setVisible(false);
    more_btn.setVisible(false);
    less_btn.setVisible(false);


    let lore_backdrop = this.add.graphics();

    const fillColor = 0x14133F;
    lore_backdrop.fillStyle(fillColor);
    lore_backdrop.fillRect(0, 0, this.game.renderer.width, this.game.renderer.height)
    lore_backdrop.setDepth(50);


    this.layer20.setVisible(false);
    

    let lore_depth = 50;
    let lore_xpos = this.game.renderer.width * 0.734;
    let lore_ypos = this.game.renderer.height * 0.30;
    let lore_scale = 0.61;

    // Profundidades Nuevas
    doll.setDepth(4 + lore_depth);
    doll.setPosition(lore_xpos,lore_ypos);
    doll.setScale(lore_scale);

    dress.setDepth(10 + lore_depth)
    dress.setPosition(lore_xpos,lore_ypos);
    dress.setScale(lore_scale);

    top.setDepth(4 + lore_depth)
    top.setPosition(lore_xpos,lore_ypos);
    top.setScale(lore_scale);

    hair.setDepth(12 + lore_depth)
    hair.setPosition(lore_xpos,lore_ypos);
    hair.setScale(lore_scale);

    backhair.setDepth(3 + lore_depth) 
    backhair.setPosition(lore_xpos,lore_ypos);
    backhair.setScale(lore_scale);


    let shirt_flag = localStorage.getItem('shirt_flag' + this.cur_slot);
    shirt.setDepth(9 + lore_depth - (shirt_flag * 5))
    shirt.setPosition(lore_xpos,lore_ypos);
    shirt.setScale(lore_scale);


    skirt.setDepth(5 + lore_depth)
    skirt.setPosition(lore_xpos,lore_ypos);
    skirt.setScale(lore_scale);

    pants.setDepth(6 + lore_depth)
    pants.setPosition(lore_xpos,lore_ypos);
    pants.setScale(lore_scale);

    acc1.setDepth(11 + lore_depth)
    acc1.setPosition(lore_xpos,lore_ypos);
    acc1.setScale(lore_scale);

    acc2.setDepth(10 + lore_depth)
    acc2.setPosition(lore_xpos,lore_ypos);
    acc2.setScale(lore_scale);

    acc3.setDepth(2 + lore_depth)
    acc3.setPosition(lore_xpos,lore_ypos);
    acc3.setScale(lore_scale);

    eye1.setDepth(7 + lore_depth)
    eye1.setPosition(lore_xpos,lore_ypos);
    eye1.setScale(lore_scale);

    eyebrow.setDepth(8 + lore_depth)
    eyebrow.setPosition(lore_xpos,lore_ypos);
    eyebrow.setScale(lore_scale);

    background.setDepth(1 + lore_depth)
    background.setPosition(lore_xpos,lore_ypos);
    background.setScale(0.50, 0.437);

    nose.setDepth(5 + lore_depth)
    nose.setPosition(lore_xpos,lore_ypos);
    nose.setScale(lore_scale);

    mouth.setDepth(5 + lore_depth)
    mouth.setPosition(lore_xpos,lore_ypos);
    mouth.setScale(lore_scale);

    ear.setDepth(19 + lore_depth)
    ear.setPosition(lore_xpos,lore_ypos);
    ear.setScale(lore_scale);

    this.flag_lore = 1;

// Lore Information

// Input Name
let input_name = this.add.dom(this.game.renderer.width * 0.022, this.game.renderer.height * 0.08, 'input','width:284px; height:52px; font-size: 36px; text-align: center; border: 2px solid white; background: transparent; outline: none; color: white; resize:none;');
input_name.setOrigin(0);
input_name.node.type = 'text';
input_name.node.value = localStorage.getItem('input' + this.cur_slot);
input_name.node.id = 'name';
input_name.node.classList.add('input_name');
input_name.node.maxLength = '12';


const textname = document.getElementById('name');


// Input Bio
let text_bio = this.add.dom(this.game.renderer.width * 0.03, this.game.renderer.height * 0.14, 'textarea','width:254px; height:450px; font-size: 32px; padding: 15px 15px 15px 15px; border: 2px solid white; background: transparent; outline: none; color: white; resize:none;');
text_bio.setOrigin(0);
text_bio.node.value = localStorage.getItem('bio_id' + this.cur_slot);
text_bio.node.id = 'bio';
text_bio.node.classList.add('input_bio');
text_bio.node.maxLength = '160';

// Limit Bio
const textbio = document.getElementById('bio');

let limit_bio = this.add.text(this.game.renderer.width * 0.338, this.game.renderer.height * 0.525, textbio.value.length + '/' + '160', { fontSize: '20px', fill: '#FFFFFF'});
limit_bio.setDepth(60);

setInterval(() => {
    limit_bio.setText(textbio.value.length + '/' + '160');
}, 30);



let text_note = this.add.dom(this.game.renderer.width * 0.03, this.game.renderer.height * 0.54, 'textarea','width:640px; height:520px; font-size: 32px; padding: 15px 15px 15px 15px; border: 2px solid white; background: transparent; outline: none; color: white; resize:none;');
text_note.setOrigin(0);
text_note.node.value = localStorage.getItem('note_id' + this.cur_slot);
text_note.node.id = 'note';
text_note.node.classList.add('input_note');
text_note.node.maxLength = '999999';

// Limit note
const textnote = document.getElementById('note');

let limit_note = this.add.text(this.game.renderer.width * 0.76, this.game.renderer.height * 0.98, textnote.value.length + '/' + '160', { fontSize: '20px', fill: '#FFFFFF'});
limit_note.setDepth(60);

setInterval(() => {
    limit_note.setText(textnote.value.length + '/' + '999999');
}, 30);

let save_lore = this.add.image(this.game.renderer.width * 0.27, this.game.renderer.height * 0.015, "save_lore");
save_lore.setDepth(lore_depth + 2);
save_lore.setInteractive();
save_lore.setOrigin(0);

save_lore.on('pointerdown',()=>{

    // Texto Aviso 
    let text_saved = this.add.text(this.game.renderer.width * 0.38, this.game.renderer.height * 0.026, 'Saved' ,{fontSize: 40})
    text_saved.setDepth(lore_depth + 7);

    this.tweens.add({
        targets: text_saved,
        alpha: 0,
        y: '-=25', 
        duration: 400, 
        onComplete: () => {
            text_saved.destroy();
        }
    });

    // Guardar Titulos
    localStorage.setItem('input' + this.cur_slot, input_name.node.value);
    // Guardar Biografia
    localStorage.setItem('bio_id' + this.cur_slot, text_bio.node.value);
    // Guardar Nota
    localStorage.setItem('note_id' + this.cur_slot, text_note.node.value);

    this.flag_lock = 0;
}) 


// Flag Lock Save
textbio.addEventListener('keydown',()=>{
    this.flag_lock = 1;
})

textnote.addEventListener('keydown',()=>{
    this.flag_lock = 1;
})

textname.addEventListener('keydown',()=>{
    this.flag_lock = 1;
})
    let slot_qty = Number(localStorage.getItem('slot'));



    // Next and Previous Arrow
    let next_lore = this.add.image(this.game.renderer.width * 0.95, this.game.renderer.height * 0.042,'right_arrow1');
    next_lore.setDepth(lore_depth + 7);
    next_lore.setInteractive();
    if(this.cur_slot === slot_qty){
    next_lore.setVisible(false);
}
    next_lore.on('pointerdown',()=>{

    if(this.timer1 === 0){

    if(this.flag_lock === 0){

    // sube un numero el cur slot
    this.cur_slot = Number(this.cur_slot + 1);

    if(this.cur_slot === slot_qty){
    next_lore.setVisible(false);
    }else if(this.cur_slot < slot_qty){
    next_lore.setVisible(true);
    }

    // elimina el contenido
    this.flag_lore = 0;
    lore_backdrop.destroy();
    return_lore.destroy();
    this.menuback.setVisible(true);
    this.playload.setVisible(true);
    this.lore.setVisible(true);
    more_btn.setVisible(true);
    less_btn.setVisible(true);
    this.layer20.setVisible(true);

    input_name.destroy();
    text_bio.destroy();
    text_note.destroy();
    save_lore.destroy();
    limit_bio.destroy();
    limit_note.destroy();
    next_lore.destroy();
    previous_lore.destroy();

    // Emite el evento

    if (this.move_rightblock === 1){
        more_btn.emit('pointerdown');
    }

    // Mover LoadSlot si es necesario
    // let move_steps = Number(Math.floor((this.cur_slot -1)  / 3));

    this.move_leftblock = Number(((this.cur_slot - 1) % 3) / 2)
    this.move_rightblock = Math.min(Number(((this.cur_slot -1) % 3) / 2),1);
    let move_frameload = Number(((this.cur_slot - 1) % 3) * 220 + 20)

    this.frameload.x = move_frameload;
    recycle_btn.x = move_frameload + 162;


    dress.setVisible(false);
    top.setVisible(false);
    hair.setVisible(false);
    backhair.setVisible(false);
    shirt.setVisible(false);
    skirt.setVisible(false);
    pants.setVisible(false);
    acc1.setVisible(false);
    acc2.setVisible(false);
    acc3.setVisible(false);
    eye1.setVisible(false);
    eyebrow.setVisible(false);
    background.setVisible(false);
    nose.setVisible(false);
    mouth.setVisible(false);
    ear.setVisible(false);


    // Doll Skin

    doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[localStorage.getItem('skin_id' + this.cur_slot)]);

    // Dress
    if(localStorage.getItem('dress_id' + this.cur_slot) > 0){
    dress.setTexture("dress_" + localStorage.getItem('dress_id' + this.cur_slot));
    dress.setPosition(localStorage.getItem('dressxpos' + this.cur_slot), localStorage.getItem('dressypos' + this.cur_slot))
    dress.setVisible(true);
    dress.setDepth(10);
    }

    // Top
    if(localStorage.getItem('top_id' + this.cur_slot) > 0){
    top.setTexture("top_" + localStorage.getItem('top_id' + this.cur_slot));
    top.setVisible(true);
    top.setDepth(4);
    }

    // Hair
    if(localStorage.getItem('hair_id' + this.cur_slot) > 0){
    hair.setTexture("hair_" + localStorage.getItem('hair_id' + this.cur_slot));
    hair.setVisible(true);
    hair.setDepth(12);
    }

    // BackHair
    if(localStorage.getItem('backhair_id' + this.cur_slot) > 0){
    backhair.setTexture("backhair_" + localStorage.getItem('backhair_id' + this.cur_slot));
    backhair.setVisible(true);
    backhair.setDepth(3);
    }

    // Shirt
    if(localStorage.getItem('shirt_id' + this.cur_slot) > 0){
    shirt.setTexture("shirt_" + localStorage.getItem('shirt_id' + this.cur_slot) + "_" + Number(localStorage.getItem('shirt_var' + localStorage.getItem('shirt_id' + this.cur_slot) + "_" + this.cur_slot)));
    shirt.setPosition(localStorage.getItem('shirtxpos' + this.cur_slot), localStorage.getItem('shirtypos' + this.cur_slot))
    shirt.setVisible(true);
    let shirt_flag = localStorage.getItem('shirt_flag' + this.cur_slot);
    shirt.setDepth(9- (shirt_flag * 5));
    }

    // skirt
    if(localStorage.getItem('skirt_id' + this.cur_slot) > 0){
    skirt.setTexture("skirt_" + localStorage.getItem('skirt_id' + this.cur_slot) + "_" + Number(localStorage.getItem('skirt_var' + localStorage.getItem('skirt_id' + this.cur_slot) + "_" + this.cur_slot)));
    skirt.setPosition(localStorage.getItem('skirtxpos' + this.cur_slot), localStorage.getItem('skirtypos' + this.cur_slot))
    skirt.setVisible(true);
    skirt.setDepth(5);
    }
    
    // Pants
    if(localStorage.getItem('pants_id' + this.cur_slot) > 0){
    pants.setTexture("pants_" + localStorage.getItem('pants_id' + this.cur_slot) + "_" + Number(localStorage.getItem('pants_var' + localStorage.getItem('pants_id' + this.cur_slot) + "_" + this.cur_slot)));
    pants.setPosition(localStorage.getItem('pantsxpos' + this.cur_slot), localStorage.getItem('pantsypos' + this.cur_slot))
    pants.setVisible(true);
    pants.setDepth(6);
    }
            
    // ACC 1
    if(localStorage.getItem('acc1_id' + this.cur_slot) > 0){
    acc1.setTexture("strains_" + localStorage.getItem('acc1_id' + this.cur_slot));
    acc1.setVisible(true);
    acc1.setDepth(11); 
    }

    // ACC 2
    if(localStorage.getItem('acc2_id' + this.cur_slot) > 0){
    acc2.setTexture("acc2_" + localStorage.getItem('acc2_id' + this.cur_slot) + "_" + Number(localStorage.getItem('acc2_var' + localStorage.getItem('acc2_id' + this.cur_slot) + "_" + this.cur_slot)));
    acc2.setVisible(true);
    acc2.setDepth(10); 
    }

    // ACC 3
    if(localStorage.getItem('acc3_id' + this.cur_slot) > 0){
    acc3.setTexture("acc3_" + localStorage.getItem('acc3_id' + this.cur_slot));
    acc3.setVisible(true);
    acc3.setDepth(2);
    }

    // Eyes
    if(localStorage.getItem('eye1_id' + this.cur_slot) > 0){
    eye1.setTexture("eye1_" + localStorage.getItem('eye1_id' + this.cur_slot));
    eye1.setVisible(true);
    eye1.setDepth(7);
    }

    // Eyebrow
    if(localStorage.getItem('eyebrow_id' + this.cur_slot) > 0){
    eyebrow.setTexture("eyebrow_" + localStorage.getItem('eyebrow_id' + this.cur_slot));
    eyebrow.setVisible(true);
    eyebrow.setDepth(8);
    }

    // Backgrounds
    if(localStorage.getItem('background_id' + this.cur_slot) > 0){
    background.setTexture("background_" + localStorage.getItem('background_id' + this.cur_slot));
    background.setVisible(true);
    background.setDepth(1);
    }

    // Nose
    if(localStorage.getItem('nose_id' + this.cur_slot) > 0){
    nose.setTexture("nose_" + localStorage.getItem('nose_id' + this.cur_slot));
    nose.setVisible(true);
    nose.setDepth(5);
    }

    // Mouth
    if(localStorage.getItem('mouth_id' + this.cur_slot) > 0){
    mouth.setTexture("mouth_" + localStorage.getItem('mouth_id' + this.cur_slot));
    mouth.setVisible(true);
    mouth.setDepth(5);
    }

    // Ear
    if(localStorage.getItem('ear_id' + this.cur_slot) > 1){

    let num = Number(localStorage.getItem('skin_id' + this.cur_slot))
    let curskin = Number(num + 1)

    ear.setTexture("ear" + localStorage.getItem('ear_id' + this.cur_slot) + "_" + curskin);
    ear.setVisible(true);
    ear.setDepth(19);
    }


    this.timer1 = 5;
    this.lore.emit('pointerdown');
}else if(this.flag_lock===1){


    input_name.setVisible(false);
    text_bio.setVisible(false);
    text_note.setVisible(false);
    save_lore.setVisible(false);
    limit_bio.setVisible(false);
    limit_note.setVisible(false);
    return_lore.removeInteractive();

    let width = this.sys.game.config.width;
    let height = this.sys.game.config.height;
    let menurectangle = this.add.rectangle(width / 2, height / 2, width, height, 0x000000);
    menurectangle.setAlpha(0.2);
    menurectangle.setDepth(lore_depth + 5);


    let backdrop = this.add.rectangle(width / 2, height / 2, width / 1.2, height / 3, 0x000000);
    backdrop.setDepth(lore_depth + 6);

    let quitlore_btn = this.add.text(this.game.renderer.width *0.1, this.game.renderer.height * 0.38,'Change Without Save?', { fontSize: '48px', fill: '#FFFFFF'})
    quitlore_btn.setDepth(lore_depth + 7);

    // Save and Quit
    let return_save = this.add.image(this.game.renderer.width * 0.3, this.game.renderer.height * 0.5,'save_img');
    return_save.setDepth(lore_depth + 7);
    return_save.setScale(1.8);
    return_save.setInteractive();
    return_save.on('pointerdown',()=>{


    // Guardar Titulos
    localStorage.setItem('input' + this.cur_slot, input_name.node.value);
    // Guardar Biografia
    localStorage.setItem('bio_id' + this.cur_slot, text_bio.node.value);
    // Guardar Nota
    localStorage.setItem('note_id' + this.cur_slot, text_note.node.value);


    this.flag_lock = 0;

    next_lore.emit('pointerdown');
    menurectangle.destroy();
    backdrop.destroy();
    quitlore_btn.destroy();
    return_save.destroy();
    return_load.destroy();
    // next_lore.destroy();
    // previous_lore.destroy();
    // return_lore.emit('pointerdown');

    })

    // Quit
    let return_load = this.add.image(this.game.renderer.width * 0.7, this.game.renderer.height * 0.5,'dontsave');
    return_load.setDepth(lore_depth + 7);
    return_load.setScale(1.8);
    return_load.setInteractive();
    return_load.on('pointerdown',()=>{

    menurectangle.destroy();
    backdrop.destroy();
    quitlore_btn.destroy();
    return_save.destroy();
    return_load.destroy();
    this.flag_lock = 0;
    next_lore.emit('pointerdown');

    // next_lore.destroy();
    // previous_lore.destroy();
    // return_lore.emit('pointerdown');
    })


}
}
})


let previous_lore = this.add.image(this.game.renderer.width * 0.52, this.game.renderer.height * 0.042,'left_arrow1');
previous_lore.setDepth(lore_depth + 7);
previous_lore.setInteractive();
if(this.cur_slot < 2){
    previous_lore.setVisible(false);
}
previous_lore.on('pointerdown',()=>{

if(this.timer2 === 0){

if(this.flag_lock === 0){
// Baja un numero el cur slot
this.cur_slot = Number(this.cur_slot - 1);

if(this.cur_slot < 2){
previous_lore.setVisible(false);
}else if(this.cur_slot > 1 ){
previous_lore.setVisible(true);
}

// elimina el contenido
this.flag_lore = 0;
lore_backdrop.destroy();
return_lore.destroy();
this.menuback.setVisible(true);
this.playload.setVisible(true);
this.lore.setVisible(true);
more_btn.setVisible(true);
less_btn.setVisible(true);
this.layer20.setVisible(true);

input_name.destroy();
text_bio.destroy();
text_note.destroy();
save_lore.destroy();
limit_bio.destroy();
limit_note.destroy();
next_lore.destroy();
previous_lore.destroy();

// Emite el evento


this.move_leftblock = Number(((this.cur_slot - 1) % 3) / 2)
this.move_rightblock = Math.min(Number(((this.cur_slot -1) % 3) / 2),1);

if (this.move_leftblock === 1){
    less_btn.emit('pointerdown');
}

let move_frameload = Number(((this.cur_slot - 1) % 3) * 220 + 20)

this.frameload.x = move_frameload;
recycle_btn.x = move_frameload + 162;


dress.setVisible(false);
top.setVisible(false);
hair.setVisible(false);
backhair.setVisible(false);
shirt.setVisible(false);
skirt.setVisible(false);
pants.setVisible(false);
acc1.setVisible(false);
acc2.setVisible(false);
acc3.setVisible(false);
eye1.setVisible(false);
eyebrow.setVisible(false);
background.setVisible(false);
nose.setVisible(false);
mouth.setVisible(false);
ear.setVisible(false);

// Doll Skin

doll.anims.setCurrentFrame(doll.anims.currentAnim.frames[localStorage.getItem('skin_id' + this.cur_slot)]);

// Dress
if(localStorage.getItem('dress_id' + this.cur_slot) > 0){
dress.setTexture("dress_" + localStorage.getItem('dress_id' + this.cur_slot));
dress.setPosition(localStorage.getItem('dressxpos' + this.cur_slot), localStorage.getItem('dressypos' + this.cur_slot))
dress.setVisible(true);
dress.setDepth(10);
}

// Top
if(localStorage.getItem('top_id' + this.cur_slot) > 0){
top.setTexture("top_" + localStorage.getItem('top_id' + this.cur_slot));
top.setVisible(true);
top.setDepth(4);
}

// Hair
if(localStorage.getItem('hair_id' + this.cur_slot) > 0){
hair.setTexture("hair_" + localStorage.getItem('hair_id' + this.cur_slot));
hair.setVisible(true);
hair.setDepth(12);
}

// BackHair
if(localStorage.getItem('backhair_id' + this.cur_slot) > 0){
backhair.setTexture("backhair_" + localStorage.getItem('backhair_id' + this.cur_slot));
backhair.setVisible(true);
backhair.setDepth(3);
}

// Shirt
if(localStorage.getItem('shirt_id' + this.cur_slot) > 0){
shirt.setTexture("shirt_" + localStorage.getItem('shirt_id' + this.cur_slot) + "_" + Number(localStorage.getItem('shirt_var' + localStorage.getItem('shirt_id' + this.cur_slot) + "_" + this.cur_slot)));
shirt.setPosition(localStorage.getItem('shirtxpos' + this.cur_slot), localStorage.getItem('shirtypos' + this.cur_slot))
shirt.setVisible(true);

let shirt_flag = localStorage.getItem('shirt_flag' + this.cur_slot);
shirt.setDepth(9 -(shirt_flag * 5));
}

// skirt
if(localStorage.getItem('skirt_id' + this.cur_slot) > 0){
skirt.setTexture("skirt_" + localStorage.getItem('skirt_id' + this.cur_slot) + "_" + Number(localStorage.getItem('skirt_var' + localStorage.getItem('skirt_id' + this.cur_slot) + "_" + this.cur_slot)));
skirt.setPosition(localStorage.getItem('skirtxpos' + this.cur_slot), localStorage.getItem('skirtypos' + this.cur_slot))
skirt.setVisible(true);
skirt.setDepth(5);
}

// Pants
if(localStorage.getItem('pants_id' + this.cur_slot) > 0){
pants.setTexture("pants_" + localStorage.getItem('pants_id' + this.cur_slot) + "_" + Number(localStorage.getItem('pants_var' + localStorage.getItem('pants_id' + this.cur_slot) + "_" + this.cur_slot)));
pants.setPosition(localStorage.getItem('pantsxpos' + this.cur_slot), localStorage.getItem('pantsypos' + this.cur_slot))
pants.setVisible(true);
pants.setDepth(6);
}
        
// ACC 1
if(localStorage.getItem('acc1_id' + this.cur_slot) > 0){
acc1.setTexture("strains_" + localStorage.getItem('acc1_id' + this.cur_slot));
acc1.setVisible(true);
acc1.setDepth(11); 
}

// ACC 2
if(localStorage.getItem('acc2_id' + this.cur_slot) > 0){
acc2.setTexture("acc2_" + localStorage.getItem('acc2_id' + this.cur_slot) + "_" + Number(localStorage.getItem('acc2_var' + localStorage.getItem('acc2_id' + this.cur_slot) + "_" + this.cur_slot)));
acc2.setVisible(true);
acc2.setDepth(10); 
}

// ACC 3
if(localStorage.getItem('acc3_id' + this.cur_slot) > 0){
acc3.setTexture("acc3_" + localStorage.getItem('acc3_id' + this.cur_slot));
acc3.setVisible(true);
acc3.setDepth(2);
}

// Eyes
if(localStorage.getItem('eye1_id' + this.cur_slot) > 0){
eye1.setTexture("eye1_" + localStorage.getItem('eye1_id' + this.cur_slot));
eye1.setVisible(true);
eye1.setDepth(7);
}

// Eyebrow
if(localStorage.getItem('eyebrow_id' + this.cur_slot) > 0){
eyebrow.setTexture("eyebrow_" + localStorage.getItem('eyebrow_id' + this.cur_slot));
eyebrow.setVisible(true);
eyebrow.setDepth(8);
}

// Backgrounds
if(localStorage.getItem('background_id' + this.cur_slot) > 0){
background.setTexture("background_" + localStorage.getItem('background_id' + this.cur_slot));
background.setVisible(true);
background.setDepth(1);
}

// Nose
if(localStorage.getItem('nose_id' + this.cur_slot) > 0){
nose.setTexture("nose_" + localStorage.getItem('nose_id' + this.cur_slot));
nose.setVisible(true);
nose.setDepth(5);
}

// Mouth
if(localStorage.getItem('mouth_id' + this.cur_slot) > 0){
mouth.setTexture("mouth_" + localStorage.getItem('mouth_id' + this.cur_slot));
mouth.setVisible(true);
mouth.setDepth(5);
}

// Ear
if(localStorage.getItem('ear_id' + this.cur_slot) > 1){

let num = Number(localStorage.getItem('skin_id' + this.cur_slot))
let curskin = Number(num + 1)

ear.setTexture("ear" + localStorage.getItem('ear_id' + this.cur_slot) + "_" + curskin);
ear.setVisible(true);
ear.setDepth(19);
}


this.timer2 = 5;
this.lore.emit('pointerdown');

}else if(this.flag_lock===1){


    input_name.setVisible(false);
    text_bio.setVisible(false);
    text_note.setVisible(false);
    save_lore.setVisible(false);
    limit_bio.setVisible(false);
    limit_note.setVisible(false);
    return_lore.removeInteractive();

    let width = this.sys.game.config.width;
    let height = this.sys.game.config.height;
    let menurectangle = this.add.rectangle(width / 2, height / 2, width, height, 0x000000);
    menurectangle.setAlpha(0.2);
    menurectangle.setDepth(lore_depth + 5);


    let backdrop = this.add.rectangle(width / 2, height / 2, width / 1.2, height / 3, 0x000000);
    backdrop.setDepth(lore_depth + 6);

    let quitlore_btn = this.add.text(this.game.renderer.width *0.1, this.game.renderer.height * 0.38,'Change Without Save?', { fontSize: '48px', fill: '#FFFFFF'})
    quitlore_btn.setDepth(lore_depth + 7);

    // Save and Quit
    let return_save = this.add.image(this.game.renderer.width * 0.3, this.game.renderer.height * 0.5,'save_img');
    return_save.setDepth(lore_depth + 7);
    return_save.setScale(1.8);
    return_save.setInteractive();
    return_save.on('pointerdown',()=>{
    // Guardar Titulos
    localStorage.setItem('input' + this.cur_slot, input_name.node.value);
    // Guardar Biografia
    localStorage.setItem('bio_id' + this.cur_slot, text_bio.node.value);
    // Guardar Nota
    localStorage.setItem('note_id' + this.cur_slot, text_note.node.value);

    menurectangle.destroy();
    backdrop.destroy();
    quitlore_btn.destroy();
    return_save.destroy();
    return_load.destroy();
    this.flag_lock = 0;
    previous_lore.emit('pointerdown');

    })

    // Quit
    let return_load = this.add.image(this.game.renderer.width * 0.7, this.game.renderer.height * 0.5,'dontsave');
    return_load.setDepth(lore_depth + 7);
    return_load.setScale(1.8);
    return_load.setInteractive();
    return_load.on('pointerdown',()=>{


    menurectangle.destroy();
    backdrop.destroy();
    quitlore_btn.destroy();
    return_save.destroy();
    return_load.destroy();
    this.flag_lock = 0;
    previous_lore.emit('pointerdown');
    })
}

}
})




let return_lore = this.add.image(this.game.renderer.width * 0.07, this.game.renderer.height * 0.038, "return");
    return_lore.setDepth(1 + lore_depth);
    return_lore.setScale(0.7);
    return_lore.setInteractive();
    return_lore.on('pointerdown',()=>{

    // Salir (Sin cuadro de guardado)
    if(this.flag_lock === 0){
    let return_xpos = this.game.renderer.width / 2;
    let return_ypos = this.game.renderer.height * 0.42;

    doll.setDepth(4);
    doll.setPosition(return_xpos,return_ypos);
    doll.setScale(1);

    dress.setDepth(10);
    dress.setPosition(return_xpos,return_ypos);
    dress.setScale(1);

    top.setDepth(4);
    top.setPosition(return_xpos,return_ypos);
    top.setScale(1);

    hair.setDepth(12);
    hair.setPosition(return_xpos,return_ypos);
    hair.setScale(1);

    backhair.setDepth(3);
    backhair.setPosition(return_xpos,return_ypos);
    backhair.setScale(1);

    
    let shirt_flag = localStorage.getItem('shirt_flag' + this.cur_slot);
    shirt.setDepth(9 - (shirt_flag * 5));
    shirt.setPosition(return_xpos,return_ypos);
    shirt.setScale(1);

    skirt.setDepth(5);
    skirt.setPosition(return_xpos,return_ypos);
    skirt.setScale(1);

    pants.setDepth(6);
    pants.setPosition(return_xpos,return_ypos);
    pants.setScale(1);

    acc1.setDepth(11);
    acc1.setPosition(return_xpos,return_ypos);
    acc1.setScale(1);

    acc2.setDepth(10);
    acc2.setPosition(return_xpos,return_ypos);
    acc2.setScale(1);

    acc3.setDepth(2);
    acc3.setPosition(return_xpos,return_ypos);
    acc3.setScale(1);

    eye1.setDepth(7);
    eye1.setPosition(return_xpos,return_ypos);
    eye1.setScale(1);

    eyebrow.setDepth(8);
    eyebrow.setPosition(return_xpos,return_ypos);
    eyebrow.setScale(1);

    background.setDepth(1);
    background.setPosition(return_xpos,return_ypos);
    background.setScale(1.6);

    nose.setDepth(5);
    nose.setPosition(return_xpos,return_ypos);
    nose.setScale(1);

    mouth.setDepth(5);
    mouth.setPosition(return_xpos,return_ypos);
    mouth.setScale(1);

    ear.setDepth(19);
    ear.setPosition(return_xpos,return_ypos);
    ear.setScale(1);

    this.flag_lore = 0;
    lore_backdrop.destroy();
    return_lore.destroy();
    this.menuback.setVisible(true);
    this.playload.setVisible(true);
    this.lore.setVisible(true);
    more_btn.setVisible(true);
    less_btn.setVisible(true);
    this.layer20.setVisible(true);

    input_name.destroy();
    text_bio.destroy();
    text_note.destroy();
    save_lore.destroy();
    limit_bio.destroy();
    limit_note.destroy();
    next_lore.destroy();
    previous_lore.destroy();

    // Nuevo texto en los nomres de los 3 inputs (Necesita crearse el evento luego de mover los nuevos elementos)

    for(let i=0;i<3;i++){
    // Obten las id de los 3 inputs, formula:
    let number = Number(i + 1);
    let aux = Number(number + (3 * this.flag4));
    let maxslots = Number(localStorage.getItem('slot'));


    // Cambia el texto de los inputs
    if(aux <= maxslots){

    let inputs = document.getElementsByClassName('inputs');
    inputs[i].value = localStorage.getItem('input' + aux);
    
    }
    }


// Salir (Con cuadro de guardado)
}else if(this.flag_lock===1){

    input_name.setVisible(false);
    text_bio.setVisible(false);
    text_note.setVisible(false);
    save_lore.setVisible(false);
    limit_bio.setVisible(false);
    limit_note.setVisible(false);
    return_lore.removeInteractive();

    let width = this.sys.game.config.width;
    let height = this.sys.game.config.height;
    let menurectangle = this.add.rectangle(width / 2, height / 2, width, height, 0x000000);
    menurectangle.setAlpha(0.2);
    menurectangle.setDepth(lore_depth + 5);


    let backdrop = this.add.rectangle(width / 2, height / 2, width / 1.2, height / 3, 0x000000);
    backdrop.setDepth(lore_depth + 6);

    let quitlore_btn = this.add.text(this.game.renderer.width *0.1, this.game.renderer.height * 0.38,'Return Without Save?', { fontSize: '48px', fill: '#FFFFFF'})
    quitlore_btn.setDepth(lore_depth + 7);

    // Save and Quit
    let return_save = this.add.image(this.game.renderer.width * 0.3, this.game.renderer.height * 0.5,'return_save');
    return_save.setDepth(lore_depth + 7);
    return_save.setScale(1.8);
    return_save.setInteractive();
    return_save.on('pointerdown',()=>{
    // Guardar Titulos
    localStorage.setItem('input' + this.cur_slot, input_name.node.value);
    // Guardar Biografia
    localStorage.setItem('bio_id' + this.cur_slot, text_bio.node.value);
    // Guardar Nota
    localStorage.setItem('note_id' + this.cur_slot, text_note.node.value);


    this.flag_lock = 0;
    menurectangle.destroy();
    backdrop.destroy();
    quitlore_btn.destroy();
    return_save.destroy();
    return_load.destroy();
    next_lore.destroy();
    previous_lore.destroy();


    return_lore.emit('pointerdown');

    })



    // Quit
    let return_load = this.add.image(this.game.renderer.width * 0.7, this.game.renderer.height * 0.5,'return_load');
    return_load.setDepth(lore_depth + 7);
    return_load.setScale(1.8);
    return_load.setInteractive();
    return_load.on('pointerdown',()=>{
        this.flag_lock = 0;
        menurectangle.destroy();
        backdrop.destroy();
        quitlore_btn.destroy();
        return_save.destroy();
        return_load.destroy();
        next_lore.destroy();
        previous_lore.destroy();
        return_lore.emit('pointerdown');
    })
}
})


}
})


// Existentes Graficos tumbnails
if(this.slotnum > 0){
    for(let i=0; i<this.slotnum;i++){

    // Dresses for Tumbnail

    // Doll
    if (this.anims.exists('dollskin')){

    }else{
    let dollskins2 = this.anims.create({
        key: "dollskin",
        frameRate: 17,
        frames: this.anims.generateFrameNames("dollskin",{
            scale: 0.4,
            prefix: "doll_skin",
            start: 1,
            end:17,
        }),
    });
}

    let number = Number(i + 1);
    // Local Storage
    if(localStorage.getItem('input' + number) === null){
        localStorage.setItem('input' + number, ' ');
    }

    if(localStorage.getItem('bio_id' + number) === null){
        localStorage.setItem('bio_id' + number, ' ');
    }
    
    if(localStorage.getItem('note_id' + number) === null){
        localStorage.setItem('note_id' + number, ' ');
    }


    // Doll
    // let doll2 = Phaser.GameObjects.Sprite = this.add.sprite(30 + (i * 220), this.game.renderer.height * 0.70,"dollskin",'doll_skin1');
    let doll2 = Phaser.GameObjects.Sprite = this.add.sprite(this.game.renderer.width, this.game.renderer.height * 0.70,"dollskin",'doll_skin1');
    doll2.setDepth(20);
    doll2.setVisible(true);
    doll2.play("dollskin");
    doll2.anims.pause();
    doll2.anims.setCurrentFrame(doll2.anims.currentAnim.frames[1]);



    // Dress
    // this.dress_gph = this.add.image((30 + (i * 220)) + (localStorage.getItem('dressxmanh' + number) * 0.3), (this.game.renderer.height * 0.70) + (localStorage.getItem('dressymanh' + number) * 0.3),'dress_1');
    this.dress_gph = this.add.image(this.game.renderer.width + (localStorage.getItem('dressxmanh' + number) * 0.3), (this.game.renderer.height * 0.70) + (localStorage.getItem('dressymanh' + number) * 0.3),'dress_1');
    this.dress_gph.setOrigin(0);
    this.dress_gph.setVisible(false);


    // Tops
    // let top_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'top_1');
    let top_gph = this.add.image(this.game.renderer.width, this.game.renderer.height * 0.70,'top_1');
    top_gph.setOrigin(0);
    top_gph.setVisible(false);


    // Hair
    // let hair_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'hair_1');
    let hair_gph = this.add.image(this.game.renderer.width, this.game.renderer.height * 0.70,'hair_1');
    hair_gph.setOrigin(0);
    hair_gph.setVisible(false);


    // BackHair
    // let backhair_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'backhair_1');
    let backhair_gph = this.add.image(this.game.renderer.width, this.game.renderer.height * 0.70,'backhair_1');
    backhair_gph.setOrigin(0);
    backhair_gph.setVisible(false);


    // Shirt
    // let shirt_gph = this.add.image((30 + (i * 220)) + (localStorage.getItem('shirtxmanh' + number) * 0.3), (this.game.renderer.height * 0.70) + (localStorage.getItem('shirtymanh' + number) * 0.3),'shirt_1');
    let shirt_gph = this.add.image((this.game.renderer.width) + (localStorage.getItem('shirtxmanh' + number) * 0.3), (this.game.renderer.height * 0.70) + (localStorage.getItem('shirtymanh' + number) * 0.3),'shirt_1_1');
    shirt_gph.setOrigin(0);
    shirt_gph.setVisible(false);


    // Skirt
    // let skirt_gph = this.add.image((30 + (i * 220)) + (localStorage.getItem('skirtxmanh' + number) * 0.3), (this.game.renderer.height * 0.70) + (localStorage.getItem('skirtymanh' + number) * 0.3),'skirt_1');
    let skirt_gph = this.add.image((this.game.renderer.width) + (localStorage.getItem('skirtxmanh' + number) * 0.3), (this.game.renderer.height * 0.70) + (localStorage.getItem('skirtymanh' + number) * 0.3),'skirt_1_1');
    skirt_gph.setOrigin(0);
    skirt_gph.setVisible(false);


    // Pants
    // let pants_gph = this.add.image((30 + (i * 220)) + (localStorage.getItem('pantsxmanh' + number) * 0.3), (this.game.renderer.height * 0.70) + (localStorage.getItem('pantsymanh' + number) * 0.3),'pants_1');
    let pants_gph = this.add.image((this.game.renderer.width) + (localStorage.getItem('pantsxmanh' + number) * 0.3), (this.game.renderer.height * 0.70) + (localStorage.getItem('pantsymanh' + number) * 0.3),'pants_1_1');
    pants_gph.setOrigin(0);
    pants_gph.setVisible(false);


    // ACC 1
    // let acc1_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'strains_1');
    let acc1_gph = this.add.image(this.game.renderer.width, this.game.renderer.height * 0.70,'strains_1');
    acc1_gph.setOrigin(0);
    acc1_gph.setVisible(false);


    // ACC 2
    // let acc2_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'acc2_1');
    let acc2_gph = this.add.image(this.game.renderer.width, this.game.renderer.height * 0.70,'acc2_1_1');
    acc2_gph.setOrigin(0);
    acc2_gph.setVisible(false);


    // ACC 3
    // let acc3_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'acc3_1');
    let acc3_gph = this.add.image(this.game.renderer.width, this.game.renderer.height * 0.70,'acc3_1');
    acc3_gph.setOrigin(0);
    acc3_gph.setVisible(false);


    // Eyes
    // let eye1_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'eye1_1');
    let eye1_gph = this.add.image(this.game.renderer.width, this.game.renderer.height * 0.70,'eye1_1');
    eye1_gph.setOrigin(0);
    eye1_gph.setVisible(false);


    // Eyebrow
    // let eyebrow_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'eyebrow_1');
    let eyebrow_gph = this.add.image(this.game.renderer.width, this.game.renderer.height * 0.70,'eyebrow_1');
    eyebrow_gph.setOrigin(0);
    eyebrow_gph.setVisible(false);


    // Background
    // let background_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'background_1');
    let background_gph = this.add.image(this.game.renderer.width, this.game.renderer.height * 0.70,'background_0');
    background_gph.setOrigin(0);
    background_gph.setVisible(false);


    // Noses
    // let nose_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'nose_1');
    let nose_gph = this.add.image(this.game.renderer.width, this.game.renderer.height * 0.70,'nose_1');
    nose_gph.setOrigin(0);
    nose_gph.setVisible(false);


    // Mouths
    // let mouth_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'mouth_1');
    let mouth_gph = this.add.image(this.game.renderer.width, this.game.renderer.height * 0.70,'mouth_1');
    mouth_gph.setOrigin(0);
    mouth_gph.setVisible(false);


    // ear 1
    // let ear_gph = this.add.image(30 + (i * 220), this.game.renderer.height * 0.70,'ear_1');
    let ear_gph = this.add.image(this.game.renderer.width, this.game.renderer.height * 0.70,'ear_1');
    ear_gph.setOrigin(0);
    ear_gph.setVisible(false);


    let num = i + 1;

    doll2.anims.setCurrentFrame(doll2.anims.currentAnim.frames[localStorage.getItem('skin_id' + num)]);
    doll2.setOrigin(0);
    doll2.setScale(0.33);
    this.layer4.add(doll2);

    this.tween_doll2 = this.tweens.add({
        targets: doll2,
        ease: 'Sine.easeInOut',
        x: 30 + (i * 220),
        duration: 300,
        paused: true,
        alpha: {
        getStart: () => 0,
        getEnd: () => 1
        },
        onComplete: () => {

        }
});

this.tween_dress = this.tweens.add({
    targets: this.dress_gph,
    ease: 'Sine.easeInOut',
    x: (30 + (i * 220)) + (localStorage.getItem('dressxmanh' + number) * 0.3),
    duration: 300,
    paused: true,
    alpha: {
    getStart: () => 0,
    getEnd: () => 1
    },
    onComplete: () => {

    }
});

this.tween_tops = this.tweens.add({
    targets: top_gph,
    ease: 'Sine.easeInOut',
    x: 30 + (i * 220),
    duration: 300,
    paused: true,
    alpha: {
    getStart: () => 0,
    getEnd: () => 1
    },
    onComplete: () => {

    }
});

this.tween_hairs = this.tweens.add({
    targets: hair_gph,
    ease: 'Sine.easeInOut',
    x: 30 + (i * 220),
    duration: 300,
    paused: true,
    alpha: {
    getStart: () => 0,
    getEnd: () => 1
    },
    onComplete: () => {

    }
});

this.tween_backhairs = this.tweens.add({
    targets: backhair_gph,
    ease: 'Sine.easeInOut',
    x: 30 + (i * 220),
    duration: 300,
    paused: true,
    alpha: {
    getStart: () => 0,
    getEnd: () => 1
    },
    onComplete: () => {

    }
});

this.tween_shirts = this.tweens.add({
    targets: shirt_gph,
    ease: 'Sine.easeInOut',
    x: (30 + (i * 220)) + (localStorage.getItem('shirtxmanh' + number) * 0.3),
    duration: 300,
    paused: true,
    alpha: {
    getStart: () => 0,
    getEnd: () => 1
    },
    onComplete: () => {

    }
});

this.tween_skirts = this.tweens.add({
    targets: skirt_gph,
    ease: 'Sine.easeInOut',
    x: (30 + (i * 220)) + (localStorage.getItem('skirtxmanh' + number) * 0.3),
    duration: 300,
    paused: true,
    alpha: {
    getStart: () => 0,
    getEnd: () => 1
    },
    onComplete: () => {

    }
});

this.tween_pants = this.tweens.add({
    targets: pants_gph,
    ease: 'Sine.easeInOut',
    x: (30 + (i * 220)) + (localStorage.getItem('pantsxmanh' + number) * 0.3),
    duration: 300,
    paused: true,
    alpha: {
    getStart: () => 0,
    getEnd: () => 1
    },
    onComplete: () => {

    }
});

this.tween_acc1 = this.tweens.add({
    targets: acc1_gph,
    ease: 'Sine.easeInOut',
    x: 30 + (i * 220),
    duration: 300,
    paused: true,
    alpha: {
    getStart: () => 0,
    getEnd: () => 1
    },
    onComplete: () => {

    }
});

this.tween_acc2 = this.tweens.add({
    targets: acc2_gph,
    ease: 'Sine.easeInOut',
    x: 30 + (i * 220),
    duration: 300,
    paused: true,
    alpha: {
    getStart: () => 0,
    getEnd: () => 1
    },
    onComplete: () => {

    }
});

this.tween_acc3 = this.tweens.add({
    targets: acc3_gph,
    ease: 'Sine.easeInOut',
    x: 30 + (i * 220),
    duration: 300,
    paused: true,
    alpha: {
    getStart: () => 0,
    getEnd: () => 1
    },
    onComplete: () => {

    }
});

this.tween_eyes = this.tweens.add({
    targets: eye1_gph,
    ease: 'Sine.easeInOut',
    x: 30 + (i * 220),
    duration: 300,
    paused: true,
    alpha: {
    getStart: () => 0,
    getEnd: () => 1
    },
    onComplete: () => {

    }
});

this.tween_eyebrows = this.tweens.add({
    targets: eyebrow_gph,
    ease: 'Sine.easeInOut',
    x: 30 + (i * 220),
    duration: 300,
    paused: true,
    alpha: {
    getStart: () => 0,
    getEnd: () => 1
    },
    onComplete: () => {

    }
});

this.tween_background = this.tweens.add({
    targets: background_gph,
    ease: 'Sine.easeInOut',
    x: 30 + (i * 220),
    duration: 300,
    paused: true,
    alpha: {
    getStart: () => 0,
    getEnd: () => 1,
    },
    onComplete: () => {

    }
});

this.tween_noses = this.tweens.add({
    targets: nose_gph,
    ease: 'Sine.easeInOut',
    x: 30 + (i * 220),
    duration: 300,
    paused: true,
    alpha: {
    getStart: () => 0,
    getEnd: () => 1,
    },
    onComplete: () => {

    }
});

this.tween_mouths = this.tweens.add({
    targets: mouth_gph,
    ease: 'Sine.easeInOut',
    x: 30 + (i * 220),
    duration: 300,
    paused: true,
    alpha: {
    getStart: () => 0,
    getEnd: () => 1,
    },
    onComplete: () => {

    }
});

this.tween_ears = this.tweens.add({
    targets: ear_gph,
    ease: 'Sine.easeInOut',
    x: 30 + (i * 220),
    duration: 300,
    paused: true,
    alpha: {
    getStart: () => 0,
    getEnd: () => 1,
    },
    onComplete: () => {

    }
});



this.tween_doll2.play();
this.tween_dress.play();
this.tween_tops.play();
this.tween_eyes.play();
this.tween_hairs.play();
this.tween_backhairs.play();
this.tween_shirts.play();
this.tween_skirts.play();
this.tween_pants.play();
this.tween_acc1.play();
this.tween_acc2.play();
this.tween_acc3.play();
this.tween_background.play();
this.tween_eyebrows.play();
this.tween_noses.play();
this.tween_mouths.play();
this.tween_ears.play();

    if(localStorage.getItem('dress_id' + num) > 0){
    this.dress_gph.setTexture("dress_" + localStorage.getItem('dress_id' + num));
    this.dress_gph.setVisible(true);
    this.dress_gph.setDepth(20);
    this.dress_gph.setScale(0.33);
    this.layer10.add(this.dress_gph);
    }

    if(localStorage.getItem('top_id' + num) > 0){
    top_gph.setTexture("top_" + localStorage.getItem('top_id' + num));
    top_gph.setVisible(true);
    top_gph.setDepth(20);
    top_gph.setScale(0.33);
    this.layer4.add(top_gph);
    }

    if(localStorage.getItem('hair_id' + num) > 0){
    hair_gph.setTexture("hair_" + localStorage.getItem('hair_id' + num));
    hair_gph.setVisible(true);
    hair_gph.setDepth(20);
    hair_gph.setScale(0.33);
    this.layer12.add(hair_gph);
    }

    if(localStorage.getItem('backhair_id' + num) > 0){
    backhair_gph.setTexture("backhair_" + localStorage.getItem('backhair_id' + num));
    backhair_gph.setVisible(true);
    backhair_gph.setDepth(20);
    backhair_gph.setScale(0.33);
    this.layer3.add(backhair_gph);
    }

    if(localStorage.getItem('shirt_id' + num) > 0){
    // shirt_gph.setTexture("shirt_" + localStorage.getItem('shirt_id' + num));
    shirt_gph.setTexture("shirt_" + localStorage.getItem('shirt_id' + num) + "_" + Number(localStorage.getItem('shirt_var' + localStorage.getItem('shirt_id' + num) + "_" + num)));
    shirt_gph.setVisible(true);
    shirt_gph.setDepth(20);
    shirt_gph.setScale(0.33);

    if(localStorage.getItem('shirt_flag' + num) == 1){
        this.layer4.add(shirt_gph);
    }else{
        this.layer9.add(shirt_gph);
    }
    }


    if(localStorage.getItem('skirt_id' + num) > 0){
    skirt_gph.setTexture("skirt_" + localStorage.getItem('skirt_id' + num) + "_" + Number(localStorage.getItem('skirt_var' + localStorage.getItem('skirt_id' + num) + "_" + num)));
    skirt_gph.setVisible(true);
    skirt_gph.setDepth(20);
    skirt_gph.setScale(0.33);
    this.layer5.add(skirt_gph);
    }


    if(localStorage.getItem('pants_id' + num) > 0){
    pants_gph.setTexture("pants_" + localStorage.getItem('pants_id' + num) + "_" + Number(localStorage.getItem('pants_var' + localStorage.getItem('pants_id' + num) + "_" + num)));
    pants_gph.setVisible(true);
    pants_gph.setDepth(20);
    pants_gph.setScale(0.33);
    this.layer6.add(pants_gph);
    }


    if(localStorage.getItem('acc1_id' + num) > 0){
    acc1_gph.setTexture("strains_" + localStorage.getItem('acc1_id' + num));
    acc1_gph.setVisible(true);
    acc1_gph.setDepth(20);
    acc1_gph.setScale(0.33);
    this.layer11.add(acc1_gph);
    }

    if(localStorage.getItem('acc2_id' + num) > 0){
    acc2_gph.setTexture("acc2_" + localStorage.getItem('acc2_id' + num) + "_" + Number(localStorage.getItem('acc2_var' + localStorage.getItem('acc2_id' + num) + "_" + num)));
    acc2_gph.setVisible(true);
    acc2_gph.setDepth(20);
    acc2_gph.setScale(0.33);
    this.layer10.add(acc2_gph);
    }

    if(localStorage.getItem('acc3_id' + num) > 0){
    acc3_gph.setTexture("acc3_" + localStorage.getItem('acc3_id' + num));
    acc3_gph.setVisible(true);
    acc3_gph.setDepth(20);
    acc3_gph.setScale(0.33);
    this.layer2.add(acc3_gph);
    }

    if(localStorage.getItem('eye1_id' + num) > 0){
    eye1_gph.setTexture("eye1_" + localStorage.getItem('eye1_id' + num));
    eye1_gph.setVisible(true);
    eye1_gph.setDepth(20);
    eye1_gph.setScale(0.33);
    this.layer7.add(eye1_gph);
    }

    if(localStorage.getItem('eyebrow_id' + num) > 0){
    eyebrow_gph.setTexture("eyebrow_" + localStorage.getItem('eyebrow_id' + num));
    eyebrow_gph.setVisible(true);
    eyebrow_gph.setDepth(20);
    eyebrow_gph.setScale(0.33);
    this.layer8.add(eyebrow_gph);
    }


    if(localStorage.getItem('background_id' + num) > 0){
    background_gph.setTexture("background_" + localStorage.getItem('background_id' + num));
    background_gph.setVisible(true);
    background_gph.setDepth(20);
    background_gph.setScale(0.292, 0.39);
    this.layer1.add(background_gph);
    }

    if(localStorage.getItem('nose_id' + num) > 0){
    nose_gph.setTexture("nose_" + localStorage.getItem('nose_id' + num));
    nose_gph.setVisible(true);
    nose_gph.setDepth(20);
    nose_gph.setScale(0.33);
    this.layer5.add(nose_gph);
    }
    
    if(localStorage.getItem('mouth_id' + num) > 0){
    mouth_gph.setTexture("mouth_" + localStorage.getItem('mouth_id' + num));
    mouth_gph.setVisible(true);
    mouth_gph.setDepth(20);
    mouth_gph.setScale(0.33);
    this.layer5.add(mouth_gph);
    }

    if(localStorage.getItem('ear_id' + num) > 1){

    let str = Number(localStorage.getItem('skin_id' + num));
    let curskin = Number(str + 1);

    ear_gph.setTexture("ear" + localStorage.getItem('ear_id' + num) + "_" + curskin);
    ear_gph.setVisible(true);
    ear_gph.setDepth(20);
    ear_gph.setScale(0.33);
    this.layer4.add(ear_gph);

    }

}
}    
    // Nuevo. La posicion se ubica luego de los existentes
    // this.addnew = this.add.image(20 + (this.slotnum * 220), this.game.renderer.height * 0.65, "add_new").setOrigin(0);
    this.addnew = this.add.image(this.game.renderer.width, this.game.renderer.height * 0.65, "add_new").setOrigin(0);
    this.addnew.setDepth(17);

    this.tween4 = this.tweens.add({
        targets: this.addnew,
        ease: 'Sine.easeInOut',
        x: 20 + (this.slotnum * 220),
        duration: 300,
        paused: true,
        alpha: {
        getStart: () => 0,
        getEnd: () => 1
        },
        onComplete: () => {
            this.addnew.setInteractive();
        }
});

this.tween4.play();

    if(localStorage.getItem('slot') <999){
    

    this.addnew.on('pointerdown',()=>{
    if(this.flag_lore===0){

    let inputs = document.getElementsByClassName('inputs');
    // Remove the elements
    
    while(inputs.length > 0){
        inputs[0].parentNode.removeChild(inputs[0]);
    } 

    this.slotnum++
    this.scene.start(CST.SCENES.GAMES, { music: this.music, slot_no: this.slotnum, slot_cur: this.slotnum, load_true: 0 });
}
})

}

if(localStorage.getItem('slot')==999){
    this.addnew.on('pointerdown',()=>{
    let info_txt = this.add.text(this.game.renderer.width / 2, this.game.renderer.height * 0.35, 'Slots Máximos (999/999)!', { fontSize: '38px', fill: '#FF0000' });
    info_txt.setDepth(50);
    info_txt.setOrigin(0.5);

    this.tweens.add({
        targets: info_txt,
        alpha: 0,
        y: '-=50', 
        duration: 1000, 
        onComplete: () => {
            info_txt.destroy();
        }
    });
})
}

    more_btn.on('pointerdown',()=>{
    if(this.flag3>0){

    this.addnew.x =  this.addnew.x - 660;
    this.frameload.x = this.frameload.x - 660;

    // Layer Movement
    this.layer1.x  = this.layer1.x - 660;
    this.layer2.x  = this.layer2.x - 660;
    this.layer3.x  = this.layer3.x - 660;
    this.layer4.x  = this.layer4.x - 660;
    this.layer5.x  = this.layer5.x - 660;
    this.layer6.x  = this.layer6.x - 660;
    this.layer7.x  = this.layer7.x - 660;
    this.layer8.x  = this.layer8.x - 660;
    this.layer9.x  = this.layer9.x - 660;
    this.layer10.x = this.layer10.x - 660;
    this.layer11.x = this.layer11.x - 660;
    this.layer12.x = this.layer12.x - 660;
    this.layer17.x = this.layer17.x - 660;
    this.layer18.x = this.layer18.x - 660;
    this.layer19.x = this.layer19.x - 660;

    this.flag3 = Math.max(this.flag3 - 1,0)
    this.flag4++;

    }

    })
    less_btn.on('pointerdown',()=>{
    if(this.flag4>0){
    this.addnew.x =  this.addnew.x + 660;
    this.frameload.x = this.frameload.x + 660;

    // Layer Movement
    this.layer1.x  = this.layer1.x + 660;
    this.layer2.x  = this.layer2.x + 660;
    this.layer3.x  = this.layer3.x + 660;
    this.layer4.x  = this.layer4.x + 660;
    this.layer5.x  = this.layer5.x + 660;
    this.layer6.x  = this.layer6.x + 660;
    this.layer7.x  = this.layer7.x + 660;
    this.layer8.x  = this.layer8.x + 660;
    this.layer9.x  = this.layer9.x + 660;
    this.layer10.x = this.layer10.x + 660;
    this.layer11.x = this.layer11.x + 660;
    this.layer12.x = this.layer12.x + 660;
    this.layer17.x = this.layer17.x + 660;
    this.layer18.x = this.layer18.x + 660;
    this.layer19.x = this.layer19.x + 660;

    this.flag3++;
    this.flag4--;
    }
    })
    }
});

this.tween7.play();
this.flag_load = 1;


} 
},this);


    if(this.enter_load === 1){
        this.loadButton.emit('pointerdown');
        this.tween7.complete();
        this.tween8.complete();
        this.tween9.complete();
        this.tween10.complete();
        this.tween11.complete();
        this.loadButton.setVisible(false);
        this.enter_load = 0;
    }

}




    update(){
    if(this.tween2.isDestroyed() && this.flag0 === 0){
        this.tween.play();
        this.flag0 = 1;
    }
    else if(this.tween.isDestroyed()){

    this.slotnum++

    this.scene.start(CST.SCENES.GAMES, { music: this.music, slot_no: this.slotnum, slot_cur: this.slotnum, load_true: 0});

    }

    if(this.timer1 > 0){
        this.timer1--;
    }
    if(this.timer2 > 0){
        this.timer2--;
    }

    }
}