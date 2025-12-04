window.TRANSLATIONS = {
  el: {
    /* =======================
       BLOCKCHAIN CONTENT
    ======================= */
    bc_title: "Τι είναι το Blockchain;",
    bc_intro:
      "Το blockchain είναι μια τεχνολογία κατανεμημένης καταγραφής δεδομένων, όπου οι πληροφορίες αποθηκεύονται σε αλυσίδες από μπλοκ που δεν μπορούν να αλλοιωθούν. Αντί τα δεδομένα να βρίσκονται σε έναν κεντρικό διακομιστή, διαμοιράζονται σε χιλιάδες υπολογιστές (κόμβους), δημιουργώντας ένα σύστημα υψηλής ασφάλειας και αξιοπιστίας.",

    bc_how_title: "Πώς λειτουργεί το Blockchain;",
    bc_how_intro:
      "Η τεχνολογία blockchain βασίζεται στη δημιουργία μπλοκ, τα οποία συνδέονται μεταξύ τους μέσω κρυπτογραφικών αποτυπωμάτων (hash). Κάθε μπλοκ περιλαμβάνει δεδομένα, τη χρονική στιγμή δημιουργίας, το δικό του hash και το hash του προηγούμενου μπλοκ.",
    bc_how_li1: "Δεδομένα συναλλαγών ή άλλου τύπου πληροφορίες",
    bc_how_li2: "Χρονική σφραγίδα (timestamp)",
    bc_how_li3: "Μοναδικό κρυπτογραφικό hash",
    bc_how_li4: "Hash προηγούμενου μπλοκ που εξασφαλίζει τη σύνδεση",
    bc_how_outro:
      "Αν ένα στοιχείο αλλοιωθεί, το hash αλλάζει, με αποτέλεσμα να φαίνεται άμεσα η παραποίηση. Έτσι το blockchain παραμένει αδιάβλητο και αξιόπιστο.",

    bc_steps_title: "Ροή μιας συναλλαγής στο Blockchain",
    bc_step1: "Ο χρήστης δημιουργεί μια συναλλαγή.",
    bc_step2: "Η συναλλαγή αποστέλλεται στο δίκτυο και μπαίνει στο mempool.",
    bc_step3: "Οι κόμβοι ελέγχουν την εγκυρότητά της.",
    bc_step4: "Η συναλλαγή προστίθεται σε ένα νέο μπλοκ.",
    bc_step5: "Το μπλοκ επιβεβαιώνεται και σφραγίζεται με hash.",
    bc_step6: "Ενσωματώνεται στην αλυσίδα και η συναλλαγή γίνεται μόνιμη.",

    bc_hash_title: "Τι είναι Hash;",
    bc_hash_text:
      "Το hash είναι ένας αλγόριθμος που μετατρέπει δεδομένα σε έναν μοναδικό κωδικό σταθερού μήκους. Ακόμη και η μικρότερη αλλαγή στα δεδομένα παράγει εντελώς διαφορετικό hash, κάνοντας την παραποίηση πρακτικά αδύνατη.",

    bc_pow_title: "Proof-of-Work (PoW)",
    bc_pow_text:
      "Στο μοντέλο Proof-of-Work, όπως συμβαίνει στο Bitcoin, οι miners χρησιμοποιούν υπολογιστική ισχύ για την εύρεση ενός έγκυρου hash. Ο πρώτος που το βρίσκει δημιουργεί το νέο μπλοκ και λαμβάνει ανταμοιβή. Το PoW προσφέρει υψηλή ασφάλεια, αλλά καταναλώνει μεγάλη ποσότητα ενέργειας.",
    bc_pow_adv_title: "Πλεονεκτήματα:",
    bc_pow_adv: "Υψηλό επίπεδο ασφάλειας και ανθεκτικότητα σε επιθέσεις.",
    bc_pow_dis_title: "Μειονεκτήματα:",
    bc_pow_dis: "Μεγάλη ενεργειακή κατανάλωση και χαμηλότερη ταχύτητα.",

    bc_pos_title: "Proof-of-Stake (PoS)",
    bc_pos_text:
      "Στο μοντέλο Proof-of-Stake, όπως στα δίκτυα Ethereum και Solana, οι χρήστες κλειδώνουν ένα ποσό κρυπτονομισμάτων και συμμετέχουν στην επιβεβαίωση μπλοκ. Το PoS είναι πιο γρήγορο και καταναλώνει ελάχιστη ενέργεια.",
    bc_pos_adv_title: "Πλεονεκτήματα:",
    bc_pos_adv: "Χαμηλή κατανάλωση ενέργειας, υψηλές ταχύτητες συναλλαγών.",
    bc_pos_dis_title: "Μειονεκτήματα:",
    bc_pos_dis: "Πιθανότητα συγκέντρωσης ισχύος σε μεγάλους κατόχους.",

    bc_uses_title: "Βασικές χρήσεις του Blockchain",
    bc_use1: "Κρυπτονομίσματα και συστήματα πληρωμών",
    bc_use2: "Έξυπνα συμβόλαια (smart contracts)",
    bc_use3: "Αποκεντρωμένη χρηματοδότηση (DeFi)",
    bc_use4: "Ψηφιακή ταυτοποίηση",
    bc_use5: "Αλυσίδες προμηθειών και ιχνηλάτηση",
    bc_use6: "Ασφαλής αποθήκευση κρίσιμων δεδομένων",
    bc_use7: "Έκδοση ψηφιακών πιστοποιητικών",

    bc_pros_title: "Πλεονεκτήματα",
    bc_pro1: "Αποκέντρωση χωρίς κεντρική αρχή.",
    bc_pro2: "Υψηλή ασφάλεια λόγω κρυπτογραφίας.",
    bc_pro3: "Διαφάνεια και δυνατότητα ελέγχου.",
    bc_pro4: "Ταχύτητα συναλλαγών σε PoS δίκτυα.",
    bc_pro5: "Αμετάβλητη καταγραφή.",

    bc_cons_title: "Μειονεκτήματα",
    bc_con1: "Υψηλή ενεργειακή κατανάλωση σε PoW δίκτυα.",
    bc_con2: "Μεταβλητές χρεώσεις.",
    bc_con3: "Δυσκολία κλιμάκωσης σε παλαιά συστήματα.",
    bc_con4: "Πολυπλοκότητα για νέους χρήστες.",

    bc_examples_title: "Παραδείγματα δημοφιλών Blockchain",
    bc_ex1: "Bitcoin: Το πρώτο blockchain.",
    bc_ex2: "Ethereum: Η βάση των smart contracts.",
    bc_ex3: "Solana: Υψηλή ταχύτητα και χαμηλά fees.",
    bc_ex4: "Chainlink: Παροχή εξωτερικών δεδομένων σε smart contracts.",

    bc_conclusion_title: "Συμπέρασμα",
    bc_conclusion:
      "Το blockchain αποτελεί μία από τις σημαντικότερες τεχνολογίες της εποχής μας και αναμένεται να διαδραματίσει καθοριστικό ρόλο στο μέλλον της ψηφιακής οικονομίας.",


    /* =======================
          FOOTER
    ======================= */
    footer_rights: "Όλα τα δικαιώματα διατηρούνται.",


    /* =======================
          LOGIN
    ======================= */
    login_title: "Σύνδεση",
    login_email: "Email",
    login_password: "Κωδικός",
    login_btn: "Σύνδεση",
    login_no_account: "Δεν έχεις λογαριασμό στο CryptoKosmos.",
    login_create_account: "Δημιουργία λογαριασμού",


    /* =======================
          SIGNUP
    ======================= */
    signup_title: "Δημιούργησε λογαριασμό",
    signup_email: "Email",
    signup_pass1: "Κωδικός",
    signup_pass2: "Επιβεβαίωση κωδικού",
    signup_error: "Οι κωδικοί δεν ταιριάζουν.",
    signup_btn: "Δημιουργία λογαριασμού",
    signup_back: "Σύνδεση",


    /* =======================
          VERIFY
    ======================= */
    verify_title: "Επαλήθευση Email",
    verify_subtitle: "Σου στείλαμε έναν 6-ψήφιο κωδικό.",
    verify_code: "Κωδικός",
    verify_error: "Λάθος κωδικός. Προσπάθησε ξανά.",
    verify_btn: "Επιβεβαίωση"
  },

  /* ========================================================
       ENGLISH TRANSLATIONS
  ======================================================== */
  en: {
    bc_title: "What is Blockchain?",
    bc_intro:
      "Blockchain is a distributed data-recording technology where information is stored in chains of blocks that cannot be altered. Instead of a central server, data is shared across thousands of computers (nodes), creating a highly secure and reliable system.",

    bc_how_title: "How Does Blockchain Work?",
    bc_how_intro:
      "Blockchain is based on blocks linked together with cryptographic hashes. Each block contains data, its timestamp, its own hash, and the hash of the previous block.",
    bc_how_li1: "Transaction data or other types of information",
    bc_how_li2: "Timestamp",
    bc_how_li3: "Unique cryptographic hash",
    bc_how_li4: "Previous block hash connecting the chain",
    bc_how_outro:
      "If any data is changed, the hash changes, making tampering immediately visible. This keeps the blockchain secure and trustworthy.",

    bc_steps_title: "Transaction Flow in Blockchain",
    bc_step1: "The user creates a transaction.",
    bc_step2: "The transaction is broadcast and enters the mempool.",
    bc_step3: "Nodes verify its validity.",
    bc_step4: "The transaction is added to a new block.",
    bc_step5: "The block is confirmed and sealed.",
    bc_step6: "It becomes part of the chain permanently.",

    bc_hash_title: "What Is a Hash?",
    bc_hash_text:
      "A hash converts data into a unique fixed-length code. Even the smallest change results in a completely different hash.",

    bc_pow_title: "Proof-of-Work (PoW)",
    bc_pow_text:
      "In PoW systems like Bitcoin, miners use computing power to find a valid hash. The first to find it creates the next block and receives a reward.",
    bc_pow_adv_title: "Advantages:",
    bc_pow_adv: "High security and resistance to attacks.",
    bc_pow_dis_title: "Disadvantages:",
    bc_pow_dis: "High energy consumption and slow speeds.",

    bc_pos_title: "Proof-of-Stake (PoS)",
    bc_pos_text:
      "In PoS systems, users lock cryptocurrency to participate in block validation. It is faster and energy-efficient.",
    bc_pos_adv_title: "Advantages:",
    bc_pos_adv: "Low energy use, high transaction throughput.",
    bc_pos_dis_title: "Disadvantages:",
    bc_pos_dis: "Possible concentration of power.",

    bc_uses_title: "Key Uses of Blockchain",
    bc_use1: "Cryptocurrencies and payment systems",
    bc_use2: "Smart contracts",
    bc_use3: "Decentralized finance (DeFi)",
    bc_use4: "Digital identity",
    bc_use5: "Supply chain tracking",
    bc_use6: "Secure storage of critical data",
    bc_use7: "Digital certificates and rights",

    bc_pros_title: "Advantages",
    bc_pro1: "Decentralization without central authority.",
    bc_pro2: "High cryptographic security.",
    bc_pro3: "Transparency and auditability.",
    bc_pro4: "Fast transactions on PoS networks.",
    bc_pro5: "Permanent and immutable record.",

    bc_cons_title: "Disadvantages",
    bc_con1: "High energy use in PoW networks.",
    bc_con2: "Variable fees.",
    bc_con3: "Scalability issues in older systems.",
    bc_con4: "Complexity for beginners.",

    bc_examples_title: "Popular Blockchain Examples",
    bc_ex1: "Bitcoin: The first blockchain.",
    bc_ex2: "Ethereum: Foundation of smart contracts.",
    bc_ex3: "Solana: High-speed, low-fee blockchain.",
    bc_ex4: "Chainlink: Provides external data to smart contracts.",

    bc_conclusion_title: "Conclusion",
    bc_conclusion:
      "Blockchain is one of the most important technologies of our era, shaping the future of digital finance and information systems.",


    /* FOOTER */
    footer_rights: "All rights reserved.",

    /* LOGIN */
    login_title: "Login",
    login_email: "Email",
    login_password: "Password",
    login_btn: "Login",
    login_no_account: "You don't have a CryptoKosmos account.",
    login_create_account: "Create Account",

    /* SIGNUP */
    signup_title: "Create an Account",
    signup_email: "Email",
    signup_pass1: "Password",
    signup_pass2: "Confirm Password",
    signup_error: "Passwords do not match.",
    signup_btn: "Create Account",
    signup_back: "Login",

    /* VERIFY */
    verify_title: "Email Verification",
    verify_subtitle: "We sent you a 6-digit code.",
    verify_code: "Code",
    verify_error: "Incorrect code. Try again.",
    verify_btn: "Verify"
  }
};