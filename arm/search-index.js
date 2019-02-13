var N=null,E="",T="t",U="u",searchIndex={};
var R=["core_arch","Reverse the order of the bytes.","_rev_u16","_rev_u32","Count Leading Zeros.","int8x4_t","int16x2_t","Returns the 16-bit signed saturated equivalent of","result","try_from","try_into","borrow_mut","type_id","uint8x4_t","uint16x2_t","formatter","std_detect"];
searchIndex[R[16]]={"doc":"Run-time feature detection for the Rust standard library.","i":[[14,"is_x86_feature_detected",R[16],"Prevents compilation if `is_x86_feature_detected` is used…",N,N],[14,"is_aarch64_feature_detected",E,"Prevents compilation if `is_aarch64_feature_detected` is…",N,N],[14,"is_powerpc_feature_detected",E,"Prevents compilation if `is_powerpc_feature_detected` is…",N,N],[14,"is_powerpc64_feature_detected",E,"Prevents compilation if `is_powerpc64_feature_detected` is…",N,N],[14,"is_mips_feature_detected",E,"Prevents compilation if `is_mips_feature_detected` is used…",N,N],[14,"is_mips64_feature_detected",E,"Prevents compilation if `is_mips64_feature_detected` is…",N,N],[14,"is_arm_feature_detected",E,"Checks if `arm` feature is enabled.",N,N]],"p":[]};
searchIndex[R[0]]={"doc":"SIMD and vendor intrinsics module.","i":[[0,"arm",R[0],"Platform-specific intrinsics for the `arm` platform.",N,N],[3,R[5],"core_arch::arm","ARM-specific 32-bit wide vector of four packed `i8`.",N,N],[3,R[13],E,"ARM-specific 32-bit wide vector of four packed `u8`.",N,N],[3,R[6],E,"ARM-specific 32-bit wide vector of two packed `i16`.",N,N],[3,R[14],E,"ARM-specific 32-bit wide vector of two packed `u16`.",N,N],[5,"__breakpoint",E,"Inserts a breakpoint instruction.",N,[[["i32"]]]],[5,R[2],E,R[1],N,[[["u16"]],["u16"]]],[5,R[3],E,R[1],N,[[["u32"]],["u32"]]],[5,R[2],E,R[1],N,[[["u16"]],["u16"]]],[5,R[3],E,R[1],N,[[["u32"]],["u32"]]],[5,"_clz_u8",E,R[4],N,[[["u8"]],["u8"]]],[5,"_clz_u16",E,R[4],N,[[["u16"]],["u16"]]],[5,"_clz_u32",E,R[4],N,[[["u32"]],["u32"]]],[5,"_rbit_u32",E,"Reverse the bit order.",N,[[["u32"]],["u32"]]],[5,"qadd",E,"Signed saturating addition",N,[[["i32"],["i32"]],["i32"]]],[5,"qsub",E,"Signed saturating subtraction",N,[[["i32"],["i32"]],["i32"]]],[5,"qadd8",E,"Saturating four 8-bit integer additions",N,[[[R[5]],[R[5]]],[R[5]]]],[5,"qsub8",E,"Saturating two 8-bit integer subtraction",N,[[[R[5]],[R[5]]],[R[5]]]],[5,"qsub16",E,"Saturating two 16-bit integer subtraction",N,[[[R[6]],[R[6]]],[R[6]]]],[5,"qadd16",E,"Saturating two 16-bit integer additions",N,[[[R[6]],[R[6]]],[R[6]]]],[5,"qasx",E,R[7],N,[[[R[6]],[R[6]]],[R[6]]]],[5,"qsax",E,R[7],N,[[[R[6]],[R[6]]],[R[6]]]],[5,"sadd16",E,R[7],N,[[[R[6]],[R[6]]],[R[6]]]],[5,"sadd8",E,"Returns the 8-bit signed saturated equivalent of",N,[[[R[5]],[R[5]]],[R[5]]]],[5,"smlad",E,"Dual 16-bit Signed Multiply with Addition of products and…",N,[[[R[6]],[R[6]],["i32"]],["i32"]]],[5,"smlsd",E,"Dual 16-bit Signed Multiply with Subtraction of products…",N,[[[R[6]],[R[6]],["i32"]],["i32"]]],[5,"sasx",E,"Returns the 16-bit signed equivalent of",N,[[[R[6]],[R[6]]],[R[6]]]],[5,"sel",E,"Select bytes from each operand according to APSR GE flags",N,[[[R[5]],[R[5]]],[R[5]]]],[5,"shadd8",E,"Signed halving parallel byte-wise addition.",N,[[[R[5]],[R[5]]],[R[5]]]],[5,"shadd16",E,"Signed halving parallel halfword-wise addition.",N,[[[R[6]],[R[6]]],[R[6]]]],[5,"shsub8",E,"Signed halving parallel byte-wise subtraction.",N,[[[R[5]],[R[5]]],[R[5]]]],[5,"shsub16",E,"Signed halving parallel halfword-wise subtraction.",N,[[[R[6]],[R[6]]],[R[6]]]],[5,"smuad",E,"Signed Dual Multiply Add.",N,[[[R[6]],[R[6]]],["i32"]]],[5,"smuadx",E,"Signed Dual Multiply Add Reversed.",N,[[[R[6]],[R[6]]],["i32"]]],[5,"smusd",E,"Signed Dual Multiply Subtract.",N,[[[R[6]],[R[6]]],["i32"]]],[5,"smusdx",E,"Signed Dual Multiply Subtract Reversed.",N,[[[R[6]],[R[6]]],["i32"]]],[5,"usad8",E,"Sum of 8-bit absolute differences.",N,[[[R[5]],[R[5]]],["u32"]]],[5,"usad8a",E,"Sum of 8-bit absolute differences and constant.",N,[[[R[5]],[R[5]],["u32"]],["u32"]]],[5,"udf",E,"Generates the trap instruction `UDF`",N,N],[11,R[9],E,E,0,[[[U]],[R[8]]]],[11,"from",E,E,0,[[[T]],[T]]],[11,R[10],E,E,0,[[["self"]],[R[8]]]],[11,"into",E,E,0,[[["self"]],[U]]],[11,"borrow",E,E,0,[[["self"]],[T]]],[11,R[11],E,E,0,[[["self"]],[T]]],[11,R[12],E,E,0,[[["self"]],["typeid"]]],[11,R[9],E,E,1,[[[U]],[R[8]]]],[11,"from",E,E,1,[[[T]],[T]]],[11,R[10],E,E,1,[[["self"]],[R[8]]]],[11,"into",E,E,1,[[["self"]],[U]]],[11,"borrow",E,E,1,[[["self"]],[T]]],[11,R[11],E,E,1,[[["self"]],[T]]],[11,R[12],E,E,1,[[["self"]],["typeid"]]],[11,R[9],E,E,2,[[[U]],[R[8]]]],[11,"from",E,E,2,[[[T]],[T]]],[11,R[10],E,E,2,[[["self"]],[R[8]]]],[11,"into",E,E,2,[[["self"]],[U]]],[11,"borrow",E,E,2,[[["self"]],[T]]],[11,R[11],E,E,2,[[["self"]],[T]]],[11,R[12],E,E,2,[[["self"]],["typeid"]]],[11,R[9],E,E,3,[[[U]],[R[8]]]],[11,"from",E,E,3,[[[T]],[T]]],[11,R[10],E,E,3,[[["self"]],[R[8]]]],[11,"into",E,E,3,[[["self"]],[U]]],[11,"borrow",E,E,3,[[["self"]],[T]]],[11,R[11],E,E,3,[[["self"]],[T]]],[11,R[12],E,E,3,[[["self"]],["typeid"]]],[11,"clone",E,E,0,[[["self"]],[R[5]]]],[11,"clone",E,E,1,[[["self"]],[R[13]]]],[11,"clone",E,E,2,[[["self"]],[R[6]]]],[11,"clone",E,E,3,[[["self"]],[R[14]]]],[11,"fmt",E,E,0,[[["self"],[R[15]]],[R[8]]]],[11,"fmt",E,E,1,[[["self"],[R[15]]],[R[8]]]],[11,"fmt",E,E,2,[[["self"],[R[15]]],[R[8]]]],[11,"fmt",E,E,3,[[["self"],[R[15]]],[R[8]]]]],"p":[[3,R[5]],[3,R[13]],[3,R[6]],[3,R[14]]]};
initSearch(searchIndex);addSearchOptions(searchIndex);