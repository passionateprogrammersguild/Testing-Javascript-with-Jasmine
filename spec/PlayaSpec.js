describe("Playa", function() {
  var playa;
  var chick;

   beforeEach(function() {
    playa = new Dude('Dave Navarro');
    chick = new Chick('Carmen Electra');
  });

  describe("when the guy asks the girl for her phone number", function() {
    beforeEach(function() {
        spyOn(playa, 'receivePhoneNumber');
    });

    it("should give the guy her digits if she is interested", function() {
      chick.isInterestedIn(playa);
      playa.askForPhoneNumber(chick);

      expect(playa.receivePhoneNumber).toHaveBeenCalled();
    });

    it("should NOT give the guy her digits if she is not interested", function() {

      playa.askForPhoneNumber(chick);

      expect(playa.receivePhoneNumber).not.toHaveBeenCalled();
    });
  });
});
