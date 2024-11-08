import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import {
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function DreamRoom(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/3dmodel/DreamRoom/DreamRoom.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["Animation"].play().paused = true;
  }, [actions]);

  useFrame((state, delta) => {
    actions["Animation"].time += delta;
    state.camera.lookAt(-25, -3, 20);
  });


  // Play other animations on mount
  useEffect(() => {
    Object.values(actions).forEach((actionValue) => {
      if (actionValue !== "Animation") {
        actionValue.play();
      }
    });
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model002" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root002">
            <group name="GLTF_SceneRootNode002" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cylinder001_9001" position={[22.32, 48.966, -6.545]} rotation={[-Math.PI, 1.175, -Math.PI]} scale={0}>
                <mesh name="Object_26002" geometry={nodes.Object_26002.geometry} material={materials['Material.027']} position={[0, 32768, -2048]} />
              </group>
              <group name="Cylinder_7001" position={[0, 48.966, -6.491]} scale={0}>
                <mesh name="Object_24002" geometry={nodes.Object_24002.geometry} material={materials['Material.027']} position={[0, 0, 4096]} />
              </group>
              <group name="Plane_1001" scale={24.037}>
                <group name="Plane001_0001" position={[0.034, -0.025, -0.055]} rotation={[0, 0.528, 0]} scale={0.042}>
                  <mesh name="Object_12001" geometry={nodes.Object_12001.geometry} material={materials.Material} />
                  <mesh name="Object_13002" geometry={nodes.Object_13002.geometry} material={materials.Material} />
                  <mesh name="Object_14002" geometry={nodes.Object_14002.geometry} material={materials.Material} />
                  <mesh name="Object_15001" geometry={nodes.Object_15001.geometry} material={materials.Material} />
                </group>
                <mesh name="Object_7002" geometry={nodes.Object_7002.geometry} material={materials['Material.012']} />
                <mesh name="Object_8001" geometry={nodes.Object_8001.geometry} material={materials['Material.012']} />
              </group>
              <group name="Sphere001_5001" scale={39.458}>
                <mesh name="Object_20002" geometry={nodes.Object_20002.geometry} material={materials['Material.016']} />
              </group>
              <group name="Sphere_2001" rotation={[-0.585, 0.233, -2.007]} scale={-90.65}>
                <mesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials['Material.014']} />
                <mesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials['Material.014']} />
              </group>
              <group name="Cube_6001" position={[0, -1.037, 0]} scale={0.011}>
                <mesh name="Object_22001" geometry={nodes.Object_22001.geometry} material={materials['Material.024']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cylinder001_9" position={[22.32, 48.966, -6.545]} rotation={[-Math.PI, 1.175, -Math.PI]} scale={0}>
                <mesh name="Object_26" geometry={nodes.Object_26.geometry} material={materials['Material.008']} position={[0, 32768, -2048]} />
              </group>
              <group name="Cylinder_7" position={[0, 48.966, -6.491]} scale={0}>
                <mesh name="Object_24" geometry={nodes.Object_24.geometry} material={materials['Material.008']} position={[0, 0, 4096]} />
              </group>
              <group name="Plane_1" scale={24.037}>
                <group name="Plane001_0" position={[0.034, -0.025, -0.055]} rotation={[0, 0.528, 0]} scale={0.042}>
                  <mesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials['Material.001']} />
                  <mesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials['Material.001']} />
                  <mesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials['Material.001']} />
                  <mesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials['Material.001']} />
                </group>
                <mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials['Material.002']} />
                <mesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials['Material.002']} />
              </group>
              <group name="Sphere001_5" scale={39.458}>
                <mesh name="Object_20" geometry={nodes.Object_20.geometry} material={materials['Material.006']} position={[0.078, 0, -0.025]} />
              </group>
              <group name="Sphere_2" rotation={[-0.585, 0.233, -2.007]} scale={-90.65} />
              <group name="Cube_6" position={[0, -1.037, 0]} scale={0.011}>
                <mesh name="Object_22" geometry={nodes.Object_22.geometry} material={materials['Material.007']} />
              </group>
            </group>
          </group>
        </group>
        <group name="Sketchfab_model001" position={[0, -1.198, -1.396]} rotation={[-Math.PI / 2, 0, 0]} scale={0.241}>
          <group name="root001">
            <group name="GLTF_SceneRootNode001" rotation={[Math.PI / 2, 0, 0]}>
              <group name="ac_21" position={[15.349, 24.005, 21.391]} rotation={[0, 1.571, 0]} scale={[1.281, 1.281, 5.268]} />
              <group name="b1001_61" position={[-16.551, 13.079, 12.573]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[1.016, 1.253, 0.235]}>
                <mesh name="Object_151" geometry={nodes.Object_151.geometry} material={materials['Material.009']} />
                <mesh name="Object_152" geometry={nodes.Object_152.geometry} material={materials['Material.004']} />
              </group>
              <group name="b1_53" position={[-16.551, 14.215, 18.475]} scale={[1.016, 1.253, 0.235]}>
                <mesh name="Object_128" geometry={nodes.Object_128.geometry} material={materials['Material.009']} />
                <mesh name="Object_129" geometry={nodes.Object_129.geometry} material={materials['Material.004']} />
              </group>
              <group name="b2_54" position={[-16.551, 14.215, 17.992]} scale={[1.016, 1.253, 0.235]}>
                <mesh name="Object_131" geometry={nodes.Object_131.geometry} material={materials['Material.009']} />
                <mesh name="Object_132" geometry={nodes.Object_132.geometry} material={materials['Material.004']} />
              </group>
              <group name="b3_55" position={[-16.551, 14.215, 17.51]} scale={[1.016, 1.253, 0.235]}>
                <mesh name="Object_134" geometry={nodes.Object_134.geometry} material={materials['Material.009']} />
                <mesh name="Object_135" geometry={nodes.Object_135.geometry} material={materials['Material.004']} />
              </group>
              <group name="b4_56" position={[-16.551, 14.215, 17.028]} scale={[1.016, 1.253, 0.235]}>
                <mesh name="Object_137" geometry={nodes.Object_137.geometry} material={materials['Material.009']} />
                <mesh name="Object_138" geometry={nodes.Object_138.geometry} material={materials['Material.004']} />
              </group>
              <group name="b5_57" position={[-16.551, 14.215, 16.545]} scale={[1.016, 1.253, 0.235]}>
                <mesh name="Object_140" geometry={nodes.Object_140.geometry} material={materials['Material.009']} />
                <mesh name="Object_141" geometry={nodes.Object_141.geometry} material={materials['Material.004']} />
              </group>
              <group name="b6_58" position={[-16.551, 14.23, 15.882]} rotation={[0.137, 0, 0]} scale={[1.016, 1.253, 0.235]}>
                <mesh name="Object_143" geometry={nodes.Object_143.geometry} material={materials['Material.009']} />
                <mesh name="Object_144" geometry={nodes.Object_144.geometry} material={materials['Material.004']} />
              </group>
              <group name="b7_60" position={[-16.551, 14.23, 15.384]} rotation={[0.137, 0, 0]} scale={[1.016, 1.253, 0.235]}>
                <mesh name="Object_148" geometry={nodes.Object_148.geometry} material={materials['Material.009']} />
                <mesh name="Object_149" geometry={nodes.Object_149.geometry} material={materials['Material.004']} />
              </group>
              <group name="bantal_11" position={[-15.014, 5.964, 12.789]} rotation={[0, 0, -0.085]} scale={[1.762, 0.087, 3.719]}>
                <mesh name="Object_26001" geometry={nodes.Object_26001.geometry} material={materials['Material.005']} />
              </group>
              <group name="bas_1_63" position={[-15.22, 1.159, -8.91]} rotation={[0, 0, -1.564]} scale={[0.543, 0.424, 0.543]}>
                <mesh name="Object_156" geometry={nodes.Object_156.geometry} material={materials.key_caps} />
                <mesh name="Object_157" geometry={nodes.Object_157.geometry} material={materials.abu2_metalic} />
              </group>
              <group name="bas_2_66" position={[-15.202, 1.159, -7.454]} rotation={[0, 0, -1.564]} scale={[0.543, 0.424, 0.543]}>
                <mesh name="Object_163" geometry={nodes.Object_163.geometry} material={materials.key_caps} />
                <mesh name="Object_164" geometry={nodes.Object_164.geometry} material={materials.abu2_metalic} />
              </group>
              <group name="bas_3_67" position={[-15.238, 1.159, -10.328]} rotation={[0, 0, -1.564]} scale={[0.543, 0.424, 0.543]}>
                <mesh name="Object_166" geometry={nodes.Object_166.geometry} material={materials.key_caps} />
                <mesh name="Object_167" geometry={nodes.Object_167.geometry} material={materials.abu2_metalic} />
              </group>
              <group name="bas_4_68" position={[-15.293, 7.551, -6.545]} rotation={[0, 0, -Math.PI / 2]} scale={[0.218, 0.243, 0.218]}>
                <mesh name="Object_169" geometry={nodes.Object_169.geometry} material={materials.key_caps} />
                <mesh name="Object_170" geometry={nodes.Object_170.geometry} material={materials.abu2_metalic} />
              </group>
              <group name="bas_5_69" position={[-15.293, 7.551, -11.447]} rotation={[0, 0, -Math.PI / 2]} scale={[0.218, 0.243, 0.218]}>
                <mesh name="Object_172" geometry={nodes.Object_172.geometry} material={materials.key_caps} />
                <mesh name="Object_173" geometry={nodes.Object_173.geometry} material={materials.abu2_metalic} />
              </group>
              <group name="batang_tirai_41" position={[-4.353, 20.899, 22.222]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.13, 9.62, 0.13]} />
              <group name="belakang_38" position={[-12.386, 15.828, 22.526]} rotation={[0, 1.571, 0]} scale={[0.149, 5.866, 10.224]} />
              <group name="cpu_case_24" position={[-13.986, 1.873, -15.016]} rotation={[0, 0, -0.035]} scale={[2.055, 0.063, 0.987]}>
                <mesh name="Object_60" geometry={nodes.Object_60.geometry} material={materials.key_caps} />
              </group>
              <group name="Cube001_31" position={[-13.099, 7.15, -8.299]} scale={[0.714, 0.074, 2.058]}>
                <mesh name="Object_79" geometry={nodes.Object_79.geometry} material={materials.keyboard} />
              </group>
              <group name="Cube002_48" position={[-17.759, 19.391, 17.714]} scale={[0.088, 0.928, 1]}>
                <mesh name="Object_116" geometry={nodes.Object_116.geometry} material={materials.hexgon_light} />
              </group>
              <group name="Cube003_30" position={[-13.177, 7.487, 3.599]} rotation={[-Math.PI, -0.41, -Math.PI / 2]} scale={[-0.026, -1.009, -0.75]}>
                <mesh name="Object_76" geometry={nodes.Object_76.geometry} material={materials.key_caps} />
                <mesh name="Object_77" geometry={nodes.Object_77.geometry} material={materials['Material.021']} />
              </group>
              <group name="Cube004_37" position={[-15.122, 12.401, -11.741]} scale={12.433}>
                <mesh name="Object_91" geometry={nodes.Object_91.geometry} material={materials['Material.023']} />
                <mesh name="Object_92" geometry={nodes.Object_92.geometry} material={materials.Trunk} />
                <mesh name="Object_93" geometry={nodes.Object_93.geometry} material={materials['Material.025']} />
              </group>
              <group name="Cube090_64" position={[-15.506, 7.477, -6.566]} scale={0.395}>
                <mesh name="Object_159" geometry={nodes.Object_159.geometry} material={materials.pintu_lemari_kecil} />
              </group>
              <group name="Cube091_65" position={[-15.506, 7.477, -11.416]} scale={0.395}>
                <mesh name="Object_161" geometry={nodes.Object_161.geometry} material={materials.pintu_lemari_kecil} />
              </group>
              <group name="Cube_29" position={[-13.978, 7.496, 1.578]} rotation={[-Math.PI, 0, -Math.PI / 2]} scale={[-0.029, -1.15, -0.855]}>
                <mesh name="Object_73" geometry={nodes.Object_73.geometry} material={materials['Material.018']} />
                <mesh name="Object_74" geometry={nodes.Object_74.geometry} material={materials['Material.020']} />
              </group>
              <group name="Cylinder001_27" position={[-11.961, 2.41, -15.055]} rotation={[0, 0, -1.606]} scale={[0.076, 0.031, 0.076]}>
                <mesh name="Object_67" geometry={nodes.Object_67.geometry} material={materials.merah_metalic} />
              </group>
              <group name="Cylinder_26" position={[-11.967, 2.658, -15.055]} rotation={[0, 0, -1.606]} scale={[0.129, 0.053, 0.129]}>
                <mesh name="Object_65" geometry={nodes.Object_65.geometry} material={materials.merah_metalic} />
              </group>
              <group name="dudukan_atas_kanan001_40" position={[5.082, 20.878, 21.896]} rotation={[0, 1.571, 0]} scale={[0.482, 0.482, 0.28]} />
              <group name="dudukan_atas_kanan_39" position={[-13.761, 20.878, 21.896]} rotation={[0, 1.571, 0]} scale={[0.482, 0.482, 0.28]} />
              <group name="dudukna_buku_1_52" position={[-16.551, 14.216, 18.784]} rotation={[0, 0, -Math.PI]} scale={[-0.189, -1.319, -0.048]}>
                <mesh name="Object_126" geometry={nodes.Object_126.geometry} material={materials.abu2_metalic} />
              </group>
              <group name="dudukna_buku_2_59" position={[-16.551, 14.216, 14.906]} rotation={[-Math.PI, 0, 0]} scale={[-0.189, -1.319, -0.048]}>
                <mesh name="Object_146" geometry={nodes.Object_146.geometry} material={materials.abu2_metalic} />
              </group>
              <group name="esc_32" position={[-13.369, 7.276, -7.939]} scale={[0.1, 0.029, 0.1]}>
                <mesh name="Object_81" geometry={nodes.Object_81.geometry} material={materials['Material.022']} />
              </group>
              <group name="gagang001_19" position={[16.053, 9.612, 17.97]} rotation={[0, 1.571, 0]} scale={[0.114, 0.453, 0.071]} />
              <group name="gagang005_20" position={[-12.344, 1.353, 1.949]} rotation={[Math.PI / 2, 0, 0]} scale={[0.114, 0.453, 0.071]}>
                <mesh name="Object_49" geometry={nodes.Object_49.geometry} material={materials.abu2_metalic} />
              </group>
              <group name="gelas_23" position={[-16.098, 8.266, 1.215]} scale={0.476}>
                <mesh name="Object_57" geometry={nodes.Object_57.geometry} material={materials['Material.019']} />
                <mesh name="Object_58" geometry={nodes.Object_58.geometry} material={materials['Material.019']} />
              </group>
              <group name="HOVER_62" position={[-15.405, 1.148, -8.908]} rotation={[0, 0, 0.007]} scale={[0.497, 0.933, 2.303]}>
                <mesh name="Object_154" geometry={nodes.Object_154.geometry} material={materials.tembok} />
              </group>
              <group name="jam_digital_28" position={[-16.602, 13.727, 8.077]} scale={0.738}>
                <mesh name="Object_69" geometry={nodes.Object_69.geometry} material={materials.key_caps} />
                <mesh name="Object_70" geometry={nodes.Object_70.geometry} material={materials['Material.015']} />
                <mesh name="Object_71" geometry={nodes.Object_71.geometry} material={materials['Material.017']} />
              </group>
              <group name="kasur_5" position={[-7.988, 4.447, 13.268]}>
                <mesh name="Object_9001" geometry={nodes.Object_9001.geometry} material={materials['Material.004']} />
              </group>
              <group name="key_caps081_35" position={[-13.369, 7.276, -7.939]} scale={[0.1, 0.029, 0.1]}>
                <mesh name="Object_87" geometry={nodes.Object_87.geometry} material={materials.key_caps} />
              </group>
              <group name="key_caps_49" position={[-15.661, 7.158, -14.092]} rotation={[0, -0.736, 0]} scale={[0.102, 0.015, 0.091]}>
                <mesh name="Object_118" geometry={nodes.Object_118.geometry} material={materials.pintu_lemari_kecil} />
              </group>
              <group name="laptop_bawah_50" position={[-14.57, 7.067, -14.638]} rotation={[0, -0.736, 0]} scale={[1.161, 0.069, 2.059]}>
                <mesh name="Object_120" geometry={nodes.Object_120.geometry} material={materials['Material.005']} />
                <mesh name="Object_121" geometry={nodes.Object_121.geometry} material={materials['Material.026']} />
              </group>
              <group name="layar_laptop_51" position={[-15.53, 8.229, -15.508]} rotation={[0, -0.736, -1.396]} scale={[1.161, 0.046, 2.059]}>
                <mesh name="Object_123" geometry={nodes.Object_123.geometry} material={materials['02_-_Default']} />
                <mesh name="Object_124" geometry={nodes.Object_124.geometry} material={materials['Material.003']} />
              </group>
              <group name="lemari_16" position={[15.331, 9.73, 20.669]} rotation={[0, 1.571, 0]} scale={[2.146, 9.572, 6.627]} />
              <group name="meja_kecil_13" position={[-15.116, 2.409, 2.348]} scale={[2.413, 2.413, 2.042]}>
                <mesh name="Object_30" geometry={nodes.Object_30.geometry} material={materials.pintu_lemari_kecil} />
                <mesh name="Object_31" geometry={nodes.Object_31.geometry} material={materials.kayu} />
                <mesh name="Object_32" geometry={nodes.Object_32.geometry} material={materials['Material.013']} />
              </group>
              <group name="meja_6" position={[-13.899, 6.743, -10.045]} scale={[2.88, 0.275, 7.439]}>
                <mesh name="Object_11" geometry={nodes.Object_11.geometry} material={materials.pine_wood} />
              </group>
              <group name="monitor001_14" position={[-16.198, 16.872, -9.989]} rotation={[0, 0, -0.146]} scale={[0.275, 4.075, 6.965]}>
                <mesh name="Object_34" geometry={nodes.Object_34.geometry} material={materials.mouse_pad} rotation={[-Math.PI, 0, -Math.PI]} scale={-1} />
                <mesh name="Object_35" geometry={nodes.Object_35.geometry} material={materials.key_caps} />
              </group>
              <group name="monitor002_22" position={[-15.107, 9.884, -4.131]} rotation={[0, 0.665, 0]} scale={[0.098, 1.155, 2.6]}>
                <mesh name="Object_54" geometry={nodes.Object_54.geometry} material={materials['Material.005']} />
                <mesh name="Object_55" geometry={nodes.Object_55.geometry} material={materials['Material.018']} />
              </group>
              <group name="monitor_7" position={[-16.23, 9.607, -8.941]} scale={[0.098, 1.451, 3.091]}>
                <mesh name="Object_13001" geometry={nodes.Object_13001.geometry} material={materials['03_-_Default']} />
                <mesh name="Object_14001" geometry={nodes.Object_14001.geometry} material={materials['Material.005']} />
              </group>
              <group name="mouse_pad_10" position={[-12.982, 7.046, -9.077]} scale={[1.283, 0.027, 3.649]}>
                <mesh name="Object_23" geometry={nodes.Object_23.geometry} material={materials.mouse_pad} />
                <mesh name="Object_24001" geometry={nodes.Object_24001.geometry} material={materials['Material.005']} />
              </group>
              <group name="mouse_scrool_9" position={[-13.53, 7.294, -45.375]} rotation={[Math.PI / 2, 0, 0]} scale={[0.07, 0.021, 0.07]}>
                <mesh name="Object_20001" geometry={nodes.Object_20001.geometry} material={materials['Material.005']} />
                <mesh name="Object_21" geometry={nodes.Object_21.geometry} material={materials['Material.011']} />
              </group>
              <group name="mouse_8" position={[-12.947, 7.235, -11.604]} scale={[0.356, 0.153, 0.157]}>
                <mesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials['Material.009']} />
                <mesh name="Object_17001" geometry={nodes.Object_17001.geometry} material={materials.key_caps} />
                <mesh name="Object_18001" geometry={nodes.Object_18001.geometry} material={materials['Material.010']} />
              </group>
              <group name="papan_atas_15" position={[-15.292, 12.738, 13.064]} scale={[2.788, 0.145, 7.458]}>
                <mesh name="Object_37" geometry={nodes.Object_37.geometry} material={materials.kayu} />
              </group>
              <group name="pen_roda_45" position={[-7.131, 0.676, -10.89]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0.03, 0.143, 0.03]}>
                <mesh name="Object_110" geometry={nodes.Object_110.geometry} material={materials.abu2_metalic} />
              </group>
              <group name="Plane_12" position={[-6.723, 11.549, 13.201]} scale={[8.9, 1.133, 8.168]}>
                <mesh name="Object_28" geometry={nodes.Object_28.geometry} material={materials['Material.005']} />
              </group>
              <group name="rangka_kursi_46" position={[-8.66, 1.505, -8.459]} rotation={[Math.PI, 0, Math.PI]} scale={[1.378, 0.182, 0.147]}>
                <mesh name="Object_112" geometry={nodes.Object_112.geometry} material={materials['Material.005']} />
              </group>
              <group name="ranjang_4" position={[-7.988, 1.522, 13.268]} scale={[9.616, 1.459, 7.714]}>
                <mesh name="Object_7001" geometry={nodes.Object_7001.geometry} material={materials.kayu} />
              </group>
              <group name="roda_44" position={[-7.131, 0.534, -11.483]} rotation={[-Math.PI / 2, 1.57, 0]} scale={[0.335, 0.058, 0.335]}>
                <mesh name="Object_108" geometry={nodes.Object_108.geometry} material={materials['Material.005']} />
              </group>
              <group name="ruangan_1" position={[0, 11.058, -13.164]} scale={[18.498, 0.198, 23.431]}>
                <mesh name="Object_4001" geometry={nodes.Object_4001.geometry} material={materials.External_Floor_Arizona} />
                <mesh name="Object_5001" geometry={nodes.Object_5001.geometry} material={materials.tembok} />
              </group>
              <group name="sirip_cpu_1_25" position={[-12.661, 3.726, -15.094]} rotation={[0, 0, -0.429]} scale={[1.047, 0.092, 0.956]}>
                <mesh name="Object_62" geometry={nodes.Object_62.geometry} material={materials.key_caps} />
                <mesh name="Object_63" geometry={nodes.Object_63.geometry} material={materials.merah_metalic} />
              </group>
              <group name="sofa_tangan_kanan001_47" position={[-7.206, 6.516, -6.049]} rotation={[0, -1.571, 0]} scale={[0.284, 0.099, 1.674]}>
                <mesh name="Object_114" geometry={nodes.Object_114.geometry} material={materials.space} />
              </group>
              <group name="sofa_17" position={[12.496, 2.367, -10.056]} rotation={[-Math.PI, 0, -Math.PI]} scale={[3.359, 2.244, 8.934]} />
              <group name="space_36" position={[-13.369, 7.276, -7.939]} scale={[0.1, 0.029, 0.1]}>
                <mesh name="Object_89" geometry={nodes.Object_89.geometry} material={materials.space} />
              </group>
              <group name="tarikan_korden_43" position={[-13.779, 16.63, 21.792]} rotation={[0, 1.571, 0]} scale={[0.073, 3.861, 0.073]} />
              <group name="tirai_42" position={[-4.92, 19.73, 22.216]} rotation={[0, 1.571, 0]} scale={[0.036, 1.143, 1.143]} />
              <group name="udr_33" position={[-13.369, 7.276, -7.939]} scale={[0.1, 0.029, 0.1]}>
                <mesh name="Object_83" geometry={nodes.Object_83.geometry} material={materials.space} />
              </group>
              <group name="wasd_34" position={[-13.369, 7.276, -7.939]} scale={[0.1, 0.029, 0.1]}>
                <mesh name="Object_85" geometry={nodes.Object_85.geometry} material={materials.space} />
              </group>
            </group>
          </group>
        </group>
        <group name="Armature001" position={[-1.418, -1.426, -3.599]} rotation={[Math.PI / 2, 0, 1.637]} scale={2.324}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="EyeLeft001" geometry={nodes.EyeLeft001.geometry} material={materials['Wolf3D_Eye.001']} skeleton={nodes.EyeLeft001.skeleton} />
          <skinnedMesh name="EyeRight001" geometry={nodes.EyeRight001.geometry} material={materials['Wolf3D_Eye.001']} skeleton={nodes.EyeRight001.skeleton} />
          <skinnedMesh name="Wolf3D_Body001" geometry={nodes.Wolf3D_Body001.geometry} material={materials['Wolf3D_Body.001']} skeleton={nodes.Wolf3D_Body001.skeleton} />
          <skinnedMesh name="Wolf3D_Glasses001" geometry={nodes.Wolf3D_Glasses001.geometry} material={materials['Wolf3D_Glasses.001']} skeleton={nodes.Wolf3D_Glasses001.skeleton} />
          <skinnedMesh name="Wolf3D_Hair001" geometry={nodes.Wolf3D_Hair001.geometry} material={materials['Wolf3D_Hair.001']} skeleton={nodes.Wolf3D_Hair001.skeleton} />
          <skinnedMesh name="Wolf3D_Head001" geometry={nodes.Wolf3D_Head001.geometry} material={materials['Wolf3D_Skin.001']} skeleton={nodes.Wolf3D_Head001.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom001" geometry={nodes.Wolf3D_Outfit_Bottom001.geometry} material={materials['Wolf3D_Outfit_Bottom.001']} skeleton={nodes.Wolf3D_Outfit_Bottom001.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Footwear001" geometry={nodes.Wolf3D_Outfit_Footwear001.geometry} material={materials['Wolf3D_Outfit_Footwear.001']} skeleton={nodes.Wolf3D_Outfit_Footwear001.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top001" geometry={nodes.Wolf3D_Outfit_Top001.geometry} material={materials['Wolf3D_Outfit_Top.001']} skeleton={nodes.Wolf3D_Outfit_Top001.skeleton} />
          <skinnedMesh name="Wolf3D_Teeth001" geometry={nodes.Wolf3D_Teeth001.geometry} material={materials['Wolf3D_Teeth.001']} skeleton={nodes.Wolf3D_Teeth001.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/3dmodel/DreamRoom/DreamRoom.glb')
